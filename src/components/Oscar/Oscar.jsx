import Link from 'next/link';

export default function Oscar({ item }) {
  return (
    <Link href={`/filme/${item.tmdb_id}`} aria-label={`${item.nome} (${item.data})`}>
      <div className="design-item">
        <div className="design-img">
          <img src={item.image} alt={`Pôster de ${item.nome}`} loading="lazy" />
          <span>
            <i className="bi bi-star-fill" aria-hidden="true"></i> {item.nota}
          </span>
          <span className="quadrado2">
            <i className="bi bi-calendar-check-fill" aria-hidden="true"></i>
            {item.data}
          </span>
        </div>
      </div>
    </Link>
  );
}
