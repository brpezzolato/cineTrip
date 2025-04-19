import Link from 'next/link';
import './Card.css';

export default function Card({ item, tipo }) {
    let mediaType = item.media_type || tipo;
    let rota = '#';

    if (mediaType === "movie") {
        rota = `/filme/${item.id}`;
    } else if (mediaType === "tv") {
        rota = `/serie/${item.id}`;
    }

    return (
        <Link href={rota}>
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`} className="poster-image" />
            </div>
        </Link>
    );
}