import SecaoCarrossel from '@/components/SecaoCarrossel/SecaoCarrossel';
import CarroselCategorias from '@/components/CarroselCategorias/CarrosselCategorias';
import { getFilmesPorGenero } from '@/lib/tmdb';

export const metadata = { title: 'Categorias' };
export const revalidate = 3600;

const DESTAQUES = [
  { id: 28, nome: 'Ação' },
  { id: 35, nome: 'Comédia' },
  { id: 27, nome: 'Terror' },
  { id: 878, nome: 'Ficção científica' },
];

export default async function Categorias() {
  const listas = await Promise.all(
    DESTAQUES.map((genero) => getFilmesPorGenero(genero.id)),
  );

  return (
    <div className="container text-white">
      {DESTAQUES.map((genero, i) => (
        <SecaoCarrossel
          key={genero.id}
          titulo="Filmes de"
          destaque={genero.nome}
          itens={listas[i].resultados}
        />
      ))}

      <CarroselCategorias />
    </div>
  );
}
