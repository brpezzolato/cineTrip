import categorias from '@/data/categorias.json';
import streamings from '@/data/streaming.json';
import noticias from '@/data/noticias.json';
import oscar from '@/data/oscar.json';
import carrosel from '@/data/carrosel.json';

export { categorias, streamings, noticias, oscar, carrosel };

export function getCategoria(id) {
  return categorias.find((c) => String(c.id) === String(id)) ?? null;
}

export function getStreaming(idTmdb) {
  return streamings.find((s) => String(s.id_tmdb) === String(idTmdb)) ?? null;
}

export function getNoticia(id) {
  return noticias.find((n) => String(n.id) === String(id)) ?? null;
}

/** Converte o parâmetro ?pagina= em um número válido entre 1 e `max`. */
export function lerPagina(valor, max = 500) {
  const pagina = Number.parseInt(valor, 10);
  if (!Number.isFinite(pagina) || pagina < 1) return 1;
  return Math.min(pagina, max);
}
