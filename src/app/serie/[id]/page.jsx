import "./style.css";

export default async function Serie({ params }) {
    const serieId = params.id;
    const chave = "de7216d4878c63a09391f1c1257f3f7b";

    const resposta = await fetch(`https://api.themoviedb.org/3/tv/${serieId}?api_key=${chave}&language=pt-BR`);
    const serie = await resposta.json();

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="card mb-3" style={{ maxWidth: 1060 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={`https://image.tmdb.org/t/p/w1280${serie.poster_path}`}
                            className="img-fluid rounded-start"
                            alt={serie.name}
                        />
                    </div>
                    <div className="col-md-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body">
                            <h1 className="card-title p-3">{serie.name}</h1>
                            <h5 className="btn-danger p-3">
                                {serie.first_air_date?.slice(0, 4)} | {serie.genres.map(g => g.name).join(', ')}
                            </h5>
                            <h5 className="card-text p-3">
                                <small className="text-body-secondary">Nota média: {serie.vote_average}</small>
                            </h5>
                            <p className="card-text p-3">
                                <small className="text-body-secondary">{serie.overview}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
