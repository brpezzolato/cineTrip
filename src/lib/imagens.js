const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

/**
 * Monta a URL de uma imagem do TMDB (pode ser usado no servidor e no cliente).
 * Tamanhos de poster: w92, w154, w185, w342, w500, w780, original.
 * Tamanhos de backdrop: w300, w780, w1280, original.
 */
export function imagemTmdb(caminho, tamanho = 'w500') {
  return caminho ? `${IMAGE_BASE_URL}/${tamanho}${caminho}` : null;
}
