'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import './noticia.css';

export default function Noticia() {
  const params = useParams();
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      const noticiasRes = await fetch('/json/noticias.json');
      const noticias = await noticiasRes.json();
      const noticiaId = Number(params.id);
      const item = noticias.find((item) => item.id === noticiaId);
      setResultado(item);
    }

    if (params?.id) {
      carregarDados();
    }
  }, [params?.id]);

  if (!resultado) {
    return null;
  }

  return (
    <>
      <header>
        <title>Cine Trip | Notícias</title>
      </header>
      <style>{`
                .item-3 {
                    color: var(--amarelo) !important;
                    border-bottom: 1px solid var(--amarelo);
                }
            `}</style>

      <section className="noticias">
        <div className="superior">
          <div className="title-noticia">
            <h2>{resultado.titulo}</h2>
            <p>{resultado.subtitulo}</p>
          </div>
          <div className="datas">
            <p>{resultado.autor}</p>
            <div className="line"></div>
            <p>
              {resultado.data}, às {resultado.horario}
            </p>
          </div>
        </div>

        <div className="meio">
          <div className="conjunto d-flex flex-column flex-lg-row">
            <div className="icones">
              <div className="circle">
                <i className="bi bi-reply-all"></i>
              </div>
              <div className="circle">
                <i className="bi bi-link-45deg"></i>
              </div>
              <div className="circle">
                <i className="bi bi-inbox"></i>
              </div>
            </div>
            <div className="imagem">
              <img className="bannerNoticia" src={resultado.banner} />
            </div>
          </div>
          <div className="paiLinha">
            <div className="linha"></div>
          </div>
        </div>

        <div className="container">
          <div className="corpoNoticia">
            <p style={{ whiteSpace: 'pre-line' }}>{resultado.conteudo}</p>
          </div>
        </div>
      </section>
    </>
  );
}