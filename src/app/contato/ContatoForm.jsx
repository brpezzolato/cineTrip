'use client';

import { useState } from 'react';

export const EMAIL_CONTATO = 'contato@cinetrip.com';

/**
 * Formulário de contato. Enquanto não há backend, monta um e-mail
 * já preenchido no cliente de e-mail do usuário.
 */
export default function ContatoForm() {
  const [enviado, setEnviado] = useState(false);

  function enviar(e) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const nome = dados.get('nome');
    const email = dados.get('email');
    const assunto = dados.get('assunto') || 'Contato pelo site';
    const mensagem = dados.get('mensagem');

    const corpo = `${mensagem}\n\n—\n${nome} <${email}>`;
    window.location.href = `mailto:${EMAIL_CONTATO}?subject=${encodeURIComponent(
      assunto,
    )}&body=${encodeURIComponent(corpo)}`;
    setEnviado(true);
  }

  return (
    <form className="d-flex flex-column gap-3 speak form-contato" onSubmit={enviar}>
      <label className="visually-hidden" htmlFor="contato-nome">Nome</label>
      <input
        id="contato-nome"
        name="nome"
        type="text"
        placeholder="Seu nome"
        className="form-control border-secondary"
        autoComplete="name"
        required
      />
      <label className="visually-hidden" htmlFor="contato-email">E-mail</label>
      <input
        id="contato-email"
        name="email"
        type="email"
        placeholder="Seu e-mail"
        className="form-control border-secondary"
        autoComplete="email"
        required
      />
      <label className="visually-hidden" htmlFor="contato-assunto">Assunto</label>
      <input
        id="contato-assunto"
        name="assunto"
        type="text"
        placeholder="Assunto"
        className="form-control border-secondary"
      />
      <label className="visually-hidden" htmlFor="contato-mensagem">Mensagem</label>
      <textarea
        id="contato-mensagem"
        name="mensagem"
        placeholder="Mensagem"
        className="form-control border-secondary"
        rows={5}
        required
      ></textarea>
      <button type="submit" className="btn btn-outline-warning">
        Enviar
      </button>
      <p className="text-white-50 small mb-0" aria-live="polite">
        {enviado
          ? `Abrimos seu aplicativo de e-mail. Se nada aconteceu, escreva para ${EMAIL_CONTATO}.`
          : `Ao enviar, seu aplicativo de e-mail será aberto com a mensagem pronta para ${EMAIL_CONTATO}.`}
      </p>
    </form>
  );
}
