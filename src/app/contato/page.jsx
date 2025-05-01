import "./contato.css";

export default function Contato() {
  const perguntasFrequentes = [
    {
      pergunta: "Como posso entrar em contato com a equipe do CineTrip?",
      resposta: "Você pode nos enviar uma mensagem diretamente pelo formulário de contato disponível em nosso site, ou, se preferir, enviar um e-mail para contato@cinetrip.com. Nossa equipe está sempre pronta para atender suas dúvidas, sugestões e parcerias. O prazo de resposta geralmente é de até 48 horas úteis.",
    },
    {
      pergunta: "O CineTrip é gratuito?",
      resposta: "Sim! O CineTrip é uma plataforma 100% gratuita. Nosso objetivo é democratizar o acesso à cultura cinematográfica, proporcionando informações, curiosidades e dicas sobre filmes e séries para todos os amantes da sétima arte, sem qualquer tipo de cobrança ou assinatura.",
    },
    {
      pergunta: "De onde vêm as informações dos filmes exibidos no CineTrip?",
      resposta: "As informações que disponibilizamos — como sinopses, notas, lançamentos e imagens — são fornecidas pela API pública da The Movie Database (TMDb), uma das maiores bases de dados de filmes e séries do mundo. Isso garante que o conteúdo esteja sempre atualizado, com dados confiáveis e de alta qualidade.",
    },
    {
      pergunta: "O CineTrip possui aplicativo para dispositivos móveis?",
      resposta: "Ainda não possuímos um aplicativo próprio para smartphones ou tablets. No entanto, nosso site é totalmente responsivo, ou seja, adaptado para funcionar perfeitamente em qualquer dispositivo, oferecendo uma navegação rápida, segura e intuitiva em celulares, notebooks e desktops.",
    },
    {
      pergunta: "Posso sugerir filmes ou séries para serem adicionados ao CineTrip?",
      resposta: "Claro! Adoramos receber sugestões da nossa comunidade. Se você conhece algum filme, série ou até mesmo documentário que gostaria de ver em destaque no CineTrip, entre em contato conosco pelo formulário de contato ou através do e-mail contato@cinetrip.com.",
    },
    {
      pergunta: "Como o CineTrip se mantém financeiramente?",
      resposta: "Atualmente, o CineTrip é um projeto independente, mantido com recursos próprios e o apoio de nossos parceiros. Futuramente, podemos considerar parcerias comerciais ou anúncios não invasivos para garantir a continuidade e evolução do projeto, sempre priorizando a melhor experiência para nossos usuários.",
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
          <h1 className="titulo text-start">Fale <span>Conosco</span></h1>
        </div>

        <div className="row g-5">
          {/* Formulário */}
          <div className="col-md-6 div-form">
            <form className="d-flex flex-column gap-3 speak">
              <input type="text" placeholder="Seu nome" className="form-control border-secondary" />
              <input type="email" placeholder="Seu e-mail" className="form-control border-secondary" />
              <input type="text" placeholder="Assunto" className="form-control border-secondary" />
              <textarea placeholder="Mensagem" className="form-control border-secondary" rows={5}></textarea>
              <button type="submit" className="btn btn btn-outline-warning">Enviar</button>
            </form>
          </div>
          <div className="col-md-6">
            <img src="/falecinetrip.png" 
            className="img-fluid img-speak"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="pt-5">
          <h2 className="mb-4 titulo">Pergunta <span>Frequentes</span></h2>
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
