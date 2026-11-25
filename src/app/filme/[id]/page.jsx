import { notFound } from 'next/navigation';
import DetalheTitulo from '@/components/DetalheTitulo/DetalheTitulo';
import {
  classificacaoNoBrasil,
  encontrarTrailer,
  getFilme,
  provedoresNoBrasil,
} from '@/lib/tmdb';
import { imagemTmdb } from '@/lib/imagens';
import { anoDe, formatarData, formatarDolar, formatarNota } from '@/lib/formatacao';

export const revalidate = 86400;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const filme = await getFilme(id);
  if (!filme) return { title: 'Filme não encontrado' };

  const poster = imagemTmdb(filme.poster_path, 'w500');
  return {
    title: filme.title,
    description: filme.overview || undefined,
    openGraph: {
      title: filme.title,
      description: filme.overview || undefined,
      images: poster ? [poster] : undefined,
    },
  };
}

export default async function FilmePage({ params }) {
  const { id } = await params;
  const filme = await getFilme(id);
  if (!filme) notFound();

  const diretores = filme.credits?.crew
    ?.filter((p) => p.job === 'Director')
    .map((p) => p.name)
    .join(', ');

  return (
    <DetalheTitulo
      titulo={filme.title}
      ano={anoDe(filme.release_date)}
      posterPath={filme.poster_path}
      backdropPath={filme.backdrop_path}
      destaques={[
        { icone: 'bi-star', texto: formatarNota(filme.vote_average) },
        {
          icone: 'bi-cassette',
          texto: filme.genres?.map((g) => g.name).join(', ') || 'Sem gênero',
        },
        { icone: 'bi-stopwatch', texto: filme.runtime ? `${filme.runtime} min` : 'Duração não informada' },
        {
          icone: 'bi-calendar-event',
          texto: `Lançamento: ${formatarData(filme.release_date) ?? 'não informado'}`,
        },
      ]}
      sinopse={filme.overview}
      elenco={filme.credits?.cast?.slice(0, 5) ?? []}
      infosRapidas={[
        { rotulo: 'Título original', valor: filme.original_title },
        { rotulo: 'Idioma original', valor: filme.original_language?.toUpperCase() },
        { rotulo: 'Direção', valor: diretores },
        { rotulo: 'Classificação', valor: classificacaoNoBrasil(filme) },
        { rotulo: 'Orçamento', valor: formatarDolar(filme.budget) },
        { rotulo: 'Bilheteria', valor: formatarDolar(filme.revenue) },
      ]}
      trailer={encontrarTrailer(filme)}
      provedores={provedoresNoBrasil(filme)}
    />
  );
}
