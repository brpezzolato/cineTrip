'use client';

import { useEffect, useState } from 'react';

/** Botão + modal do trailer. O iframe só é criado quando o modal abre. */
export default function Trailer({ videoKey, titulo }) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (!aberto) return;
    const aoApertarTecla = (e) => e.key === 'Escape' && setAberto(false);
    document.addEventListener('keydown', aoApertarTecla);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', aoApertarTecla);
      document.body.style.overflow = '';
    };
  }, [aberto]);

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-warning ms-2"
        onClick={() => setAberto(true)}
      >
        <i className="bi bi-play-fill" aria-hidden="true"></i> Ver trailer
      </button>

      {aberto && (
        <div
          className="trailer-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Trailer de ${titulo}`}
          onClick={() => setAberto(false)}
        >
          <div className="trailer-conteudo" onClick={(e) => e.stopPropagation()}>
            <h2 className="mb-3">{titulo}</h2>
            <div className="trailer-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoKey}?autoplay=1`}
                title={`Trailer de ${titulo}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <button
              type="button"
              className="btn btn-outline-warning w-100 mt-3"
              onClick={() => setAberto(false)}
              autoFocus
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
