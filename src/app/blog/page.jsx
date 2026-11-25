import Oscar from '@/components/Oscar/Oscar';
import Noticias from '@/components/Noticias/Noticias';
import { noticias, oscar } from '@/lib/dados';
import './blog.css';

export const metadata = {
  title: 'Blog',
  description: 'Notícias do mundo do cinema e os últimos vencedores do Oscar.',
};

export default function Blog() {
  return (
    <div className="pagina-blog">
      <section className="design container-geral" id="design">
        <div className="container-geral">
          <div className="designtitle">
            <h1 className="premio">
              <span className="visually-hidden">O Blog Indica</span>
              <span aria-hidden="true">O Blog</span>
              <img className="trofeu" src="/noticias/trofeuOscar.png" alt="" />
              <span aria-hidden="true">ndica</span>
            </h1>
            <div className="subtitulo">
              <p>os {oscar.length} últimos ganhadores do Oscar de melhor filme</p>
            </div>
          </div>
          <div className="design-content">
            {oscar.map((item) => (
              <div key={item.id} className="galeria">
                <Oscar item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="container-geral">
          <div className="title1">
            <h2>Tudo sobre cinema</h2>
            <p>fique por dentro das últimas notícias do mundo cinematográfico</p>
          </div>
          <div className="blog-content">
            {noticias.map((noticia) => (
              <div key={noticia.id} className="noticias">
                <Noticias noticia={noticia} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
