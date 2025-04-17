import Card from "@/components/Card/Card";

export default async function Streaming({ params }) {
    const chave = "de7216d4878c63a09391f1c1257f3f7b";
    const id_tmdb = Number(params.id);

    let nomeStreaming = "";

    switch (id_tmdb) {
        case 8:
            nomeStreaming = "Netflix";
            break;
        case 119:
            nomeStreaming = "Prime Video";
            break;
        case 337:
            nomeStreaming = "Disney+";
            break;
        case 1899:
            nomeStreaming = "Max";
            break;
        case 307:
            nomeStreaming = "Globoplay";
            break;
        case 350:
            nomeStreaming = "Apple TV+";
            break;
        case 531:
            nomeStreaming = "Paramount+";
            break;
        default:
            nomeStreaming = "Streaming desconhecido";
    }

    const baseURL = "https://api.themoviedb.org/3/discover";
    const commonParams = `?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&watch_region=BR&with_watch_monetization_types=flatrate&with_watch_providers=${id_tmdb}`;

    const [resMovies, resTV] = await Promise.all([
        fetch(`${baseURL}/movie${commonParams}`),
        fetch(`${baseURL}/tv${commonParams}`)
    ]);

    const moviesData = await resMovies.json();
    const tvData = await resTV.json();

    const filmes = (moviesData.results || []).map(item => ({ ...item, media_type: "movie" }));
    const series = (tvData.results || []).map(item => ({ ...item, media_type: "tv" }));

    const conteudos = [...filmes, ...series];

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Conteúdo disponível em {nomeStreaming}</h1>
            <div className="row">
                {conteudos.map((item) => (
                    <div key={`${item.media_type}-${item.id}`} className="col-md-3 mb-4">
                        <Card item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}