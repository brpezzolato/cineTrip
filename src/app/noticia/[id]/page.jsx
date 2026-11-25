import { notFound } from 'next/navigation';
import { getNoticia, noticias } from '@/lib/dados';
import Compartilhar from './Compartilhar';
import './noticia.css';

// IDs fora da lista retornam 404
export const dynamicParams = false;

export function generateStaticParams() {
  return noticias.map((n) => ({ id: String(n.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const noticia = getNoticia(id);
  if (!noticia) return { title: 'Notícia não encontrada' };
  return {
    title: noticia.titulo,
    description: noticia.subtitulo || noticia.descricao,
    openGraph: {
      title: noticia.titulo,
      description: noticia.subtitulo || noticia.descricao,
      images: [noticia.banner],
      type: 'article',
    },
  };
}

export default async function NoticiaPage({ params }) {
  const { id } = await params;
  const noticia = getNoticia(id);
  if (!noticia) notFound();

  return (
    <article className="noticia-pagina">
      <header className="superior">
        <div className="title-noticia">
          <h1 className="h2">{noticia.titulo}</h1>
          <p>{noticia.subtitulo}</p>
        </div>
        <div className="datas">
          <p>{noticia.autor}</p>
          <div className="line"></div>
          <p>
            {noticia.data}, às {noticia.horario}
          </p>
        </div>
      </header>

      <div className="meio">
        <div className="conjunto d-flex flex-column flex-lg-row">
          <Compartilhar titulo={noticia.titulo} />
          <div className="imagem">
            <img className="bannerNoticia" src={noticia.banner} alt="" />
          </div>
        </div>
        <div className="paiLinha">
          <div className="linha"></div>
        </div>
      </div>

      <div className="container">
        <div className="corpoNoticia">
          <p style={{ whiteSpace: 'pre-line' }}>{noticia.conteudo}</p>
        </div>
      </div>
    </article>
  );
}
