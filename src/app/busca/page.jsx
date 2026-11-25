import GradeTitulos from '@/components/GradeTitulos/GradeTitulos';
import { buscarTitulos } from '@/lib/tmdb';

function lerTermo(searchParams) {
  // `valorBuscado` é o nome antigo do parâmetro, mantido para links já compartilhados
  const termo = searchParams.q ?? searchParams.valorBuscado ?? '';
  return String(termo).trim();
}

export async function generateMetadata({ searchParams }) {
  const termo = lerTermo(await searchParams);
  return { title: termo ? `Busca: ${termo}` : 'Busca', robots: { index: false } };
}

export default async function BuscaPage({ searchParams }) {
  const termo = lerTermo(await searchParams);
  const resultados = await buscarTitulos(termo);

  return (
    <div className="container container-lista">
      <header className="pt-5">
        {termo ? (
          <>
            <h1 className="titulo">
              Resultados para: <span>{termo}</span>
            </h1>
            <p className="sub-titulo h4">Títulos encontrados: {resultados.length}</p>
          </>
        ) : (
          <h1 className="titulo">
            Digite algo na <span>busca</span>
          </h1>
        )}
      </header>

      {termo && (
        <GradeTitulos
          itens={resultados}
          mensagemVazia="Nenhum filme ou série encontrado, desculpe."
        />
      )}
    </div>
  );
}
