import "./contato.css";

export default function Contato() {
  const perguntasFrequentes = [
    {
      pergunta: "Como posso entrar em contato com a equipe do CineTrip?",
      resposta: "Você pode nos mandar uma mensagem pelo formulário ao lado ou através do e-mail contato@cinetrip.com.",
    },
    {
      pergunta: "Vocês cobram alguma taxa para acessar os conteúdos?",
      resposta: "Não! O CineTrip é totalmente gratuito. Nosso objetivo é compartilhar cultura e cinema com todos.",
    },
    {
      pergunta: "De onde vêm as informações dos filmes?",
      resposta: "As informações vêm da API pública da The Movie Database (TMDb), uma base de dados colaborativa.",
    },
  ];

  return (
    <>
      <style type="text/css">
        {`
          .item-5 {
            color: var(--amarelo) !important;
            border-bottom: 1px solid var(--amarelo);
          }
        `}
      </style>

      <div className="container text-white pt-5">
        <div className="header-cat pb-5">
          <h1 className="titulo text-start">Fale Conosco</h1>
        </div>

        <div className="row g-5">
          {/* Formulário */}
          <div className="col-md-12 div-form">
            <form className="d-flex flex-column gap-3">
              <input type="text" placeholder="Seu nome" className="form-control border-secondary" />
              <input type="email" placeholder="Seu e-mail" className="form-control border-secondary" />
              <input type="text" placeholder="Assunto" className="form-control border-secondary" />
              <textarea placeholder="Mensagem" className="form-control border-secondary" rows={5}></textarea>
              <button type="submit" className="btn btn btn-outline-warning">Enviar</button>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="pt-5">
          <h2 className="mb-4 text-warning">Perguntas Frequentes</h2>
          <div className="accordion" id="faqAccordion">
            {perguntasFrequentes.map((item, index) => (
              <div className="accordion-item bg-dark text-white border-secondary" key={index}>
                <h2 className="accordion-header" id={`heading-${index}`}>
                  <button
                    className="accordion-button collapsed position-relative"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${index}`}
                  >
                    {item.pergunta}
                  </button>
                </h2>
                <div
                  id={`collapse-${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading-${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {item.resposta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
