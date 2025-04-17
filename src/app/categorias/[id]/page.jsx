import Card from "@/components/Card/Card";

export default async function CategoriaPage({ params }) {
    const { id } = params;
    const chave = "de7216d4878c63a09391f1c1257f3f7b";

    const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${chave}&language=pt-BR&with_genres=${id}`,
        { cache: "no-store" }
    );
    const data = await res.json();
    const filmesEncontrados = data.results.filter(item => item.poster_path != null);

    return (
        <div className="container py-5 text-white">
            <h1 className="mb-4 text-black">Filmes da categoria {id}</h1>

            {filmesEncontrados.length > 0 ? (
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                    {filmesEncontrados.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-5">
                    <h3>Nenhum filme encontrado para essa categoria.</h3>
                </div>
            )}
        </div>
    );
}
