import './Card.css';

export default function Card({ img = "https://image.tmdb.org/t/p/w200/placeholder.jpg" }) {
    return (
        <div className="movie-card">
            <img src={img} className="poster-image" />
        </div>
    );
}