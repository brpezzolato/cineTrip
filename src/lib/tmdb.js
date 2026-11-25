import 'server-only';

/**
 * Cliente do TMDB usado apenas no servidor.
 *
 * A credencial nunca chega ao navegador. Configure UMA das variáveis abaixo:
 *   TMDB_READ_ACCESS_TOKEN  -> "API Read Access Token" (v4, recomendado)
 *   TMDB_API_KEY            -> "API Key" (v3)
 *
 * NEXT_PUBLIC_API_KEY ainda é aceita como fallback para não quebrar
 * deploys antigos, mas deve ser renomeada para TMDB_API_KEY.
 */

// TMDB_API_BASE_URL permite apontar para um mock em testes locais.
const BASE_URL = process.env.TMDB_API_BASE_URL || 'https://api.themoviedb.org/3';

const IDIOMA = 'pt-BR';
const REGIAO = 'BR';

// TMDB não permite paginar além da página 500 nos endpoints de discover.
export const MAX_PAGINAS = 500;

// Tempos de cache (em segundos)
const UMA_HORA = 60 * 60;
const UM_DIA = 24 * UMA_HORA;

function credenciais() {
  const token = process.env.TMDB_READ_ACCESS_TOKEN;
  const apiKey = process.env.TMDB_API_KEY || process.env.NEXT_PUBLIC_API_KEY;

  if (token) return { headers: { Authorization: `Bearer ${token}` } };
  if (apiKey) return { params: { api_key: apiKey } };

  throw new Error(
    'Credencial do TMDB ausente. Defina TMDB_READ_ACCESS_TOKEN ou TMDB_API_KEY no .env.local',
  );
}

/**
 * Faz uma requisição ao TMDB.
 * Retorna `null` quando o recurso não existe (404) e lança erro nos demais casos.
 */
export async function tmdbFetch(caminho, params = {}, { revalidate = UMA_HORA } = {}) {
  const auth = credenciais();
  const url = new URL(`${BASE_URL}${caminho}`);

  const todosParams = { language: IDIOMA, ...auth.params, ...params };
  for (const [chave, valor] of Object.entries(todosParams)) {
    if (valor !== undefined && valor !== null && valor !== '') {
      url.searchParams.set(chave, String(valor));
    }
  }

  const resposta = await fetch(url, {
    headers: { accept: 'application/json', ...auth.headers },
    next: { revalidate },
  });

  if (resposta.status === 404) return null;
  if (!resposta.ok) {
    throw new Error(`TMDB respondeu ${resposta.status} para ${caminho}`);
  }

  return resposta.json();
}

/**
 * Versão tolerante a falhas para listas: em caso de erro devolve uma página vazia,
 * assim uma seção com problema não derruba a página inteira.
 */
async function buscarLista(caminho, params, opcoes) {
  try {
    const dados = await tmdbFetch(caminho, params, opcoes);
    return {
      resultados: dados?.results ?? [],
      totalPaginas: Math.min(dados?.total_pages ?? 1, MAX_PAGINAS),
    };
  } catch (erro) {
    console.error(`[tmdb] Falha ao buscar ${caminho}:`, erro.message);
    return { resultados: [], totalPaginas: 1 };
  }
}

function comTipo(lista, tipo) {
  return lista.map((item) => ({ ...item, media_type: item.media_type ?? tipo }));
}

function comPoster(lista) {
  return lista.filter((item) => item.poster_path);
}

// ---------------------------------------------------------------------------
// Listas
// ---------------------------------------------------------------------------

export async function getFilmesEmAlta() {
  const { resultados } = await buscarLista('/trending/movie/week');
  return comTipo(resultados, 'movie');
}

export async function getSeriesEmAlta() {
  const { resultados } = await buscarLista('/trending/tv/week');
  return comTipo(resultados, 'tv');
}

export async function getFilmesEmCartaz() {
  const { resultados } = await buscarLista('/movie/now_playing', { region: REGIAO });
  return comTipo(resultados, 'movie');
}

export async function getPopularesNosStreamings() {
  const { resultados } = await buscarLista('/discover/movie', {
    sort_by: 'popularity.desc',
    watch_region: REGIAO,
    with_watch_monetization_types: 'flatrate',
  });
  return comTipo(resultados, 'movie');
}

/** Filmes de um gênero (ou de vários, separados por vírgula). */
export async function getFilmesPorGenero(generoId, pagina = 1) {
  const { resultados, totalPaginas } = await buscarLista('/discover/movie', {
    with_genres: generoId,
    sort_by: 'popularity.desc',
    page: pagina,
  });
  return { resultados: comPoster(comTipo(resultados, 'movie')), totalPaginas };
}

/** Filmes mais populares de um provedor de streaming. */
export async function getFilmesPorStreaming(providerId, pagina = 1) {
  const { resultados, totalPaginas } = await buscarLista('/discover/movie', {
    sort_by: 'popularity.desc',
    watch_region: REGIAO,
    with_watch_monetization_types: 'flatrate',
    with_watch_providers: providerId,
    page: pagina,
  });
  return { resultados: comPoster(comTipo(resultados, 'movie')), totalPaginas };
}

/** Séries mais populares de um provedor de streaming. */
export async function getSeriesPorStreaming(providerId, pagina = 1) {
  const { resultados, totalPaginas } = await buscarLista('/discover/tv', {
    sort_by: 'popularity.desc',
    watch_region: REGIAO,
    with_watch_monetization_types: 'flatrate',
    with_watch_providers: providerId,
    page: pagina,
  });
  return { resultados: comPoster(comTipo(resultados, 'tv')), totalPaginas };
}

/** Busca filmes e séries (pessoas são descartadas). */
export async function buscarTitulos(termo) {
  if (!termo?.trim()) return [];
  const { resultados } = await buscarLista(
    '/search/multi',
    { query: termo.trim(), include_adult: false },
    { revalidate: UMA_HORA },
  );
  return comPoster(
    resultados.filter((item) => item.media_type === 'movie' || item.media_type === 'tv'),
  );
}

// ---------------------------------------------------------------------------
// Detalhes
// ---------------------------------------------------------------------------

function idValido(id) {
  return /^\d+$/.test(String(id));
}

export async function getFilme(id) {
  if (!idValido(id)) return null;
  return tmdbFetch(
    `/movie/${id}`,
    { append_to_response: 'credits,videos,watch/providers,release_dates' },
    { revalidate: UM_DIA },
  );
}

export async function getSerie(id) {
  if (!idValido(id)) return null;
  return tmdbFetch(
    `/tv/${id}`,
    { append_to_response: 'credits,videos,watch/providers,content_ratings' },
    { revalidate: UM_DIA },
  );
}

// ---------------------------------------------------------------------------
// Utilitários
// ---------------------------------------------------------------------------

/** Primeiro trailer do YouTube disponível. */
export function encontrarTrailer(item) {
  return (
    item?.videos?.results?.find(
      (video) => video.site === 'YouTube' && video.type === 'Trailer',
    ) ?? null
  );
}

/** Provedores (assinatura, aluguel, compra) disponíveis no Brasil. */
export function provedoresNoBrasil(item) {
  const br = item?.['watch/providers']?.results?.[REGIAO];
  if (!br) return null;
  return {
    link: br.link,
    assinatura: br.flatrate ?? [],
    aluguel: br.rent ?? [],
    compra: br.buy ?? [],
  };
}

/** Classificação indicativa no Brasil (ex.: "L", "12", "16"), para filme ou série. */
export function classificacaoNoBrasil(item) {
  const filme = item?.release_dates?.results
    ?.find((r) => r.iso_3166_1 === REGIAO)
    ?.release_dates?.find((d) => d.certification)?.certification;
  const serie = item?.content_ratings?.results?.find((r) => r.iso_3166_1 === REGIAO)?.rating;
  const valor = filme || serie;
  if (!valor) return null;
  return valor === 'L' ? 'Livre' : `${valor} anos`;
}
