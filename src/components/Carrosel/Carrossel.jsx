import "./Carrossel.css";
import Link from "next/link";

export default function MovieCarousel({ movies }) {
    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
        >
            <div className="carousel-indicators">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={3}
                        aria-label="Slide 4"
                    />
                </div>
            </div>
            <div className="carousel-inner">
                {movies.map((movie, index) => (
                    <div
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                        key={index}
                    >
                        <img
                            src={movie.image}
                            className="d-block w-100"
                            alt={movie.title}
                        />
                        <div className="carousel-caption d-none d-md-flex flex-column align-items-start ps-0 mb-4 ms-4 row-gap-2">
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <Link href={movie.link} className="btn btn-outline-warning w-25">
                                Ver Mais
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Anterior</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Próximo</span>
            </button>
        </div>
    );
}
