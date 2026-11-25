import Link from 'next/link';
import { imagemTmdb } from '@/lib/imagens';
import { formatarData, formatarNota } from '@/lib/formatacao';
import './Card.css';

// IDs do TMDB que recebem um selo especial no card
const SELOS = [
  {
    imagem: '/tags/tagPlay.png',
    alt: 'Selo Play',
    ids: new Set([
      122, 232, 272, 451, 529, 671, 688, 840, 2710, 5912, 99861, 299534, 343611,
      497698, 567189, 974576, 1124620, 877817,
    ]),
  },
  {
    imagem: '/tags/tagIndica.png',
    alt: 'CineTrip indica',
    ids: new Set([
      110, 264, 1396, 1399, 1412, 1644, 2316, 4952, 11536, 20573, 42009, 47326,
      62134, 66729, 78029, 85271, 119051, 299536, 687163,
    ]),
  },
  {
    imagem: '/tags/tagOscar.png',
    alt: 'Indicado ao Oscar',
    ids: new Set([
      76341, 109424, 123464, 168259, 190859, 205596, 266856, 273895, 284054,
      286217, 346698, 419430, 424694, 438631, 466420, 475557, 515001, 646385,
      703745, 706972, 765869, 701387, 911430, 1317288, 1220564, 1241983,
    ]),
  },
  {
    imagem: '/tags/tagHype.png',
    alt: 'Em alta',
    ids: new Set([100088, 696506, 950387, 986056, 993710, 634649]),
  },
  {
    imagem: '/tags/tagWinner.png',
    alt: 'Vencedor do Oscar',
    classe: 'tag-img-oscar',
    ids: new Set([
      73, 103, 141, 1246, 1422, 12405, 14160, 24428, 76203, 103663, 194662,
      314365, 376867, 399055, 490132, 545611, 581734, 776503, 872585, 1064213,
      1000837, 1054867, 1233413, 858024, 1078605, 1062722, 1124566, 803796,
    ]),
  },
];

function rotaDoItem(item) {
  if (item.media_type === 'movie') return `/filme/${item.id}`;
  if (item.media_type === 'tv') return `/serie/${item.id}`;
  return null;
}

export default function Card({ item }) {
  const rota = rotaDoItem(item);
  const titulo = item.title || item.name;
  const selo = SELOS.find((s) => s.ids.has(item.id));

  const conteudo = (
    <div className="movie-card position-relative">
      {selo && <img src={selo.imagem} alt={selo.alt} className={selo.classe ?? 'tag-img'} />}
      <img
        src={imagemTmdb(item.poster_path, 'w342')}
        alt={`Pôster de ${titulo}`}
        className="img-fluid rounded abc"
        loading="lazy"
      />
      <div className="overlay d-flex flex-column container justify-content-end">
        <p className="text-white">
          <i className="bi bi-cassette" aria-hidden="true"></i> {titulo}
        </p>
        <p>
          <i className="bi bi-star" aria-hidden="true"></i> {formatarNota(item.vote_average)}
        </p>
        <p>
          <i className="bi bi-calendar-event" aria-hidden="true"></i>{' '}
          {formatarData(item.release_date || item.first_air_date) ?? 'Sem data'}
        </p>
      </div>
    </div>
  );

  return rota ? <Link href={rota}>{conteudo}</Link> : conteudo;
}
