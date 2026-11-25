import Link from 'next/link';

export default function Noticias({ noticia }) {
  return (
    <article className="blog-item">
      <div className="blog-img">
        <img src={noticia.imagem} alt="" loading="lazy" />
      </div>
      <div className="blog-text">
        <span>
          {noticia.data} às {noticia.horario}
        </span>
        <h3 className="h2">{noticia.titulo}</h3>
        <p>{noticia.descricao}</p>
        <Link href={`/noticia/${noticia.id}`} aria-label={`Ler mais: ${noticia.titulo}`}>
          Ler mais
        </Link>
      </div>
    </article>
  );
}
