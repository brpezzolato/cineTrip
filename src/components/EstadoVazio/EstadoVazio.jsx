import Link from 'next/link';

/** Mensagem padrão para "não encontrado", "inválido" ou erro, com o mascote. */
export default function EstadoVazio({
  titulo,
  mensagem,
  imagem = '/mascot/404.png',
  linkHref = '/',
  linkTexto = 'Voltar para a home',
  children,
}) {
  return (
    <div className="container text-center estado-vazio">
      <h1 className="text-warning">{titulo}</h1>
      {mensagem && <p className="text-white">{mensagem}</p>}
      {imagem && <img src={imagem} alt="" className="img-fluid" />}
      <div className="d-flex justify-content-center gap-3">
        {children}
        {linkHref && (
          <Link href={linkHref} className="btn btn-outline-warning">
            {linkTexto}
          </Link>
        )}
      </div>
    </div>
  );
}
