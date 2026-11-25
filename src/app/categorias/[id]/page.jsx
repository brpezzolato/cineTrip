import { notFound } from 'next/navigation';
import GradeTitulos from '@/components/GradeTitulos/GradeTitulos';
import Paginacao from '@/components/Paginacao/Paginacao';
import VoltarAoTopo from '@/components/VoltarAoTopo/VoltarAoTopo';
import { categorias, getCategoria, lerPagina } from '@/lib/dados';
import { getFilmesPorGenero } from '@/lib/tmdb';

export const revalidate = 3600;

// IDs fora da lista retornam 404
export const dynamicParams = false;

export function generateStaticParams() {
  return categorias.map((c) => ({ id: String(c.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const categoria = getCategoria(id);
  return categoria
    ? { title: categoria.nome, description: categoria.descricao }
    : { title: 'Categoria não encontrada' };
}

export default async function CategoriaPage({ params, searchParams }) {
  const { id } = await params;
  const categoria = getCategoria(id);
  if (!categoria) notFound();

  const pagina = lerPagina((await searchParams).pagina);
  const { resultados, totalPaginas } = await getFilmesPorGenero(categoria.id, pagina);

  return (
    <div className="container container-lista">
      <header>
        <h1 className="titulo text-start mt-5">
          Filmes de <span>{categoria.nome}</span>
        </h1>
        <p className="sub-titulo text-start h4">{categoria.descricao}</p>
        <Paginacao
          paginaAtual={pagina}
          totalPaginas={totalPaginas}
          basePath={`/categorias/${categoria.id}`}
        />
      </header>

      <GradeTitulos itens={resultados} mensagemVazia="Nenhum filme encontrado." />

      <VoltarAoTopo />
    </div>
  );
}
