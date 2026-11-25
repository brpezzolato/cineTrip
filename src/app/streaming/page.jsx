import Link from 'next/link';
import SecaoCarrossel from '@/components/SecaoCarrossel/SecaoCarrossel';
import CarroselStreamings from '@/components/CarroselStreamings/CarroselStreamings';
import { streamings } from '@/lib/dados';
import { getFilmesPorStreaming } from '@/lib/tmdb';

export const metadata = { title: 'Streaming' };
export const revalidate = 3600;

export default async function StreamingsPage() {
  const listas = await Promise.all(
    streamings.map((s) => getFilmesPorStreaming(s.id_tmdb)),
  );

  return (
    <div className="container">
      <CarroselStreamings />

      {streamings.map((streaming, i) => (
        <SecaoCarrossel
          key={streaming.id_tmdb}
          titulo="Top 10 da"
          destaque={<Link href={`/streaming/${streaming.id_tmdb}`}>{streaming.nome}</Link>}
          itens={listas[i].resultados}
          top10
        />
      ))}
    </div>
  );
}
