'use client';

import { useState } from 'react';

export default function Compartilhar({ titulo }) {
  const [copiado, setCopiado] = useState(false);

  async function compartilhar() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: titulo, url });
      } catch {
        // usuário cancelou
      }
    } else {
      copiarLink();
    }
  }

  async function copiarLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // navegador sem permissão de clipboard
    }
  }

  function enviarPorEmail() {
    const assunto = encodeURIComponent(titulo);
    const corpo = encodeURIComponent(`${titulo}\n\n${window.location.href}`);
    window.location.href = `mailto:?subject=${assunto}&body=${corpo}`;
  }

  return (
    <div className="icones">
      <button type="button" className="circle" onClick={compartilhar} title="Compartilhar">
        <i className="bi bi-reply-all" aria-hidden="true"></i>
        <span className="visually-hidden">Compartilhar</span>
      </button>
      <button
        type="button"
        className="circle"
        onClick={copiarLink}
        title={copiado ? 'Link copiado!' : 'Copiar link'}
      >
        <i className={`bi ${copiado ? 'bi-check2' : 'bi-link-45deg'}`} aria-hidden="true"></i>
        <span className="visually-hidden">{copiado ? 'Link copiado' : 'Copiar link'}</span>
      </button>
      <button type="button" className="circle" onClick={enviarPorEmail} title="Enviar por e-mail">
        <i className="bi bi-inbox" aria-hidden="true"></i>
        <span className="visually-hidden">Enviar por e-mail</span>
      </button>
      <span className="visually-hidden" aria-live="polite">
        {copiado ? 'Link copiado para a área de transferência' : ''}
      </span>
    </div>
  );
}
