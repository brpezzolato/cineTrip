import Carrosel from '@/components/Carrosel/Carrossel';
import SecaoCarrossel from '@/components/SecaoCarrossel/SecaoCarrossel';
import CarroselStreamings from '@/components/CarroselStreamings/CarroselStreamings';
import { carrosel } from '@/lib/dados';
import {
  getFilmesEmAlta,
  getFilmesEmCartaz,
  getPopularesNosStreamings,
  getSeriesEmAlta,
} from '@/lib/tmdb';

export const metadata = {
  title: { absolute: 'CineTrip | Home' },
};

// Atualiza as listas a cada hora
export const revalidate = 3600;

export default async function Home() {
  const [emAlta, populares, cartaz, seriesEmAlta] = await Promise.all([
    getFilmesEmAlta(),
    getPopularesNosStreamings(),
    getFilmesEmCartaz(),
    getSeriesEmAlta(),
  ]);

  return (
    <>
      <Carrosel movies={carrosel} />

      <div className="container">
        <SecaoCarrossel titulo="Top trending da" destaque="semana" itens={emAlta} />
        <SecaoCarrossel
          titulo="Os mais populares dos"
          destaque="streamings"
          itens={populares}
        />
        <SecaoCarrossel titulo="Em" destaque="cartaz" itens={cartaz} />
        <SecaoCarrossel
          titulo="Top trending de séries da"
          destaque="semana"
          itens={seriesEmAlta}
        />

        <div className="streamings-home mb-4">
          <CarroselStreamings />
        </div>
      </div>
    </>
  );
}
