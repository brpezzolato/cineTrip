import ContatoForm from './ContatoForm';
import './contato.css';

export const metadata = {
  title: 'Fale Conosco',
  description: 'Fale com a equipe do CineTrip e veja as perguntas frequentes.',
};

export default function Contato() {
  const perguntasFrequentes = [
    {
      pergunta:
        'Como o CineTrip me ajuda a escolher um filme ou série para assistir?',
      resposta:
        "O CineTrip oferece listas como 'Em Alta', 'Em Cartaz' e os mais populares de cada streaming, todas atualizadas com dados do TMDB. Além disso, você encontra sinopses, avaliações e curiosidades sobre cada título, facilitando sua decisão com base no seu gosto.",
    },
    {
      pergunta: 'As informações dos filmes e séries são confiáveis?',
      resposta:
        'Sim. Utilizamos a API da The Movie Database (TMDb), uma das maiores e mais confiáveis fontes de dados do mundo do entretenimento. Isso garante sinopses, notas e imagens sempre atualizadas e precisas.',
    },
    {
      pergunta: 'Preciso criar uma conta para usar o CineTrip?',
      resposta:
        'Não. O acesso à plataforma é totalmente livre e gratuito, sem necessidade de cadastro. Futuramente, funcionalidades extras poderão estar disponíveis para usuários registrados, mas o uso básico continuará aberto a todos.',
    },
    {
      pergunta: 'Consigo ver onde assistir um filme ou série pelo CineTrip?',
      resposta:
        'Sim! Na página de cada filme ou série há a seção "Onde assistir", que mostra em quais streamings o título está disponível no Brasil, além das opções de aluguel e compra.',
    },
    {
      pergunta: 'O CineTrip faz críticas ou apenas apresenta informações?',
      resposta:
        'Nosso foco principal é informativo, mas também incluímos resumos com comentários e curiosidades que ajudam o público a entender melhor a proposta do título. Futuramente, também traremos seções com recomendações editoriais e reviews.',
    },
    {
      pergunta: 'Por que alguns filmes ou séries não aparecem no CineTrip?',
      resposta:
        'Embora nosso acervo seja amplo, ele depende da base da TMDb. Alguns títulos muito novos, pouco conhecidos ou com restrições regionais podem não estar disponíveis. Mas estamos sempre atentos para incluir novos conteúdos assim que possível.',
    },
    {
      pergunta:
        'É possível sugerir melhorias ou novos recursos para a plataforma?',
      resposta:
        'Com certeza! Valorizamos muito o feedback da nossa comunidade. Use o formulário de contato ou envie um e-mail para contato@cinetrip.com com suas sugestões. Toda ideia é bem-vinda!',
    },
  ];

  return (
    <>
      <div className="container text-white pt-5">
        <div className="header-cat pb-5">
          <h1 className="titulo text-start">
            Fale <span>Conosco</span>
          </h1>
        </div>

        <div className="row g-5">
          {/* Formulário */}
          <div className="col-md-6 div-form">
            <ContatoForm />
          </div>
          <div className="col-md-6">
            <img
              src="/mascot/falecinetrip.png"
              className="img-fluid img-speak"
              alt="Mascote do CineTrip"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="pt-5">
          <h2 className="mb-4 titulo">
            Perguntas <span>frequentes</span>
          </h2>
          <div className="accordion" id="faqAccordion">
            {perguntasFrequentes.map((item, index) => (
              <div
                className="accordion-item bg-dark text-white border-secondary"
                key={index}
              >
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
                  <div className="accordion-body">{item.resposta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
