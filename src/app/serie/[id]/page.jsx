import { notFound } from 'next/navigation';
import DetalheTitulo from '@/components/DetalheTitulo/DetalheTitulo';
import {
  classificacaoNoBrasil,
  encontrarTrailer,
  getSerie,
  provedoresNoBrasil,
} from '@/lib/tmdb';
import { imagemTmdb } from '@/lib/imagens';
import { anoDe, formatarData, formatarNota } from '@/lib/formatacao';

export const revalidate = 86400;

const STATUS = {
  'Returning Series': 'Em exibição',
  Ended: 'Finalizada',
  Canceled: 'Cancelada',
  'In Production': 'Em produção',
  Planned: 'Planejada',
  Pilot: 'Episódio piloto',
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const serie = await getSerie(id);
  if (!serie) return { title: 'Série não encontrada' };

  const poster = imagemTmdb(serie.poster_path, 'w500');
  return {
    title: serie.name,
    description: serie.overview || undefined,
    openGraph: {
      title: serie.name,
      description: serie.overview || undefined,
      images: poster ? [poster] : undefined,
    },
  };
}

export default async function SeriePage({ params }) {
  const { id } = await params;
  const serie = await getSerie(id);
  if (!serie) notFound();

  const temporadas = serie.number_of_seasons;

  return (
    <DetalheTitulo
      titulo={serie.name}
      ano={anoDe(serie.first_air_date)}
      posterPath={serie.poster_path}
      backdropPath={serie.backdrop_path}
      destaques={[
        { icone: 'bi-star', texto: formatarNota(serie.vote_average) },
        {
          icone: 'bi-cassette',
          texto: serie.genres?.map((g) => g.name).join(', ') || 'Sem gênero',
        },
        {
          icone: 'bi-projector',
          texto: temporadas
            ? `${temporadas} ${temporadas === 1 ? 'temporada' : 'temporadas'}`
            : 'Temporadas não informadas',
        },
        {
          icone: 'bi-calendar-event',
          texto: `Estreia: ${formatarData(serie.first_air_date) ?? 'não informada'}`,
        },
      ]}
      sinopse={serie.overview}
      elenco={serie.credits?.cast?.slice(0, 5) ?? []}
      infosRapidas={[
        { rotulo: 'Título original', valor: serie.original_name },
        { rotulo: 'Idioma original', valor: serie.original_language?.toUpperCase() },
        { rotulo: 'Status', valor: STATUS[serie.status] ?? serie.status },
        { rotulo: 'Episódios', valor: serie.number_of_episodes },
        { rotulo: 'Classificação', valor: classificacaoNoBrasil(serie) },
        {
          rotulo: 'Criação',
          valor: serie.created_by?.map((c) => c.name).join(', '),
        },
      ]}
      trailer={encontrarTrailer(serie)}
      provedores={provedoresNoBrasil(serie)}
    />
  );
}
