import { notFound } from 'next/navigation';
import GradeTitulos from '@/components/GradeTitulos/GradeTitulos';
import Paginacao from '@/components/Paginacao/Paginacao';
import VoltarAoTopo from '@/components/VoltarAoTopo/VoltarAoTopo';
import { getStreaming, lerPagina, streamings } from '@/lib/dados';
import { getFilmesPorStreaming, getSeriesPorStreaming } from '@/lib/tmdb';

export const revalidate = 3600;

// IDs fora da lista retornam 404
export const dynamicParams = false;

export function generateStaticParams() {
  return streamings.map((s) => ({ id: String(s.id_tmdb) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const streaming = getStreaming(id);
  return { title: streaming ? streaming.nome : 'Streaming não encontrado' };
}

export default async function StreamingPage({ params, searchParams }) {
  const { id } = await params;
  const streaming = getStreaming(id);
  if (!streaming) notFound();

  const pagina = lerPagina((await searchParams).pagina);
  const [filmes, series] = await Promise.all([
    getFilmesPorStreaming(streaming.id_tmdb, pagina),
    getSeriesPorStreaming(streaming.id_tmdb, pagina),
  ]);

  // Intercala filmes e séries para a grade ficar equilibrada
  const itens = [];
  const maior = Math.max(filmes.resultados.length, series.resultados.length);
  for (let i = 0; i < maior; i++) {
    if (filmes.resultados[i]) itens.push(filmes.resultados[i]);
    if (series.resultados[i]) itens.push(series.resultados[i]);
  }

  return (
    <div className="container container-lista">
      <header>
        <h1 className="titulo text-start mt-5">
          Top do momento em <span>{streaming.nome}</span>
        </h1>
        <Paginacao
          paginaAtual={pagina}
          totalPaginas={Math.max(filmes.totalPaginas, series.totalPaginas)}
          basePath={`/streaming/${streaming.id_tmdb}`}
        />
      </header>

      <GradeTitulos itens={itens} />

      <VoltarAoTopo />
    </div>
  );
}
