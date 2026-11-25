import Link from 'next/link';

/**
 * Paginação baseada em URL (?pagina=N), funciona sem JavaScript no cliente
 * e permite compartilhar o link de uma página específica.
 */
export default function Paginacao({ paginaAtual, totalPaginas, basePath }) {
  const href = (pagina) => (pagina <= 1 ? basePath : `${basePath}?pagina=${pagina}`);
  const temAnterior = paginaAtual > 1;
  const temProxima = paginaAtual < totalPaginas;

  return (
    <nav
      className="paginacao mt-4 d-flex align-items-center gap-3"
      aria-label="Paginação"
    >
      <h2>Página {paginaAtual}</h2>

      {temAnterior ? (
        <Link href={href(paginaAtual - 1)} aria-label="Página anterior">
          <i className="bi bi-caret-left" aria-hidden="true"></i>
        </Link>
      ) : (
        <span aria-disabled="true">
          <i className="bi bi-caret-left" aria-hidden="true"></i>
        </span>
      )}

      {temProxima ? (
        <Link href={href(paginaAtual + 1)} aria-label="Próxima página">
          <i className="bi bi-caret-right" aria-hidden="true"></i>
        </Link>
      ) : (
        <span aria-disabled="true">
          <i className="bi bi-caret-right" aria-hidden="true"></i>
        </span>
      )}
    </nav>
  );
}
