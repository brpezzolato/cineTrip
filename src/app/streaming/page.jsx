import Link from "next/link";

const streamings = [
    { id: 1, nome: "Netflix", id_tmdb: 8, rota: "/streaming/8" },
    { id: 2, nome: "Prime Video", id_tmdb: 119, rota: "/streaming/119" },
    { id: 3, nome: "Disney+", id_tmdb: 337, rota: "/streaming/337" },
    { id: 4, nome: "Max", id_tmdb: 1899, rota: "/streaming/1899" },
    { id: 5, nome: "Globoplay", id_tmdb: 307, rota: "/streaming/307" },
    { id: 6, nome: "Apple TV+", id_tmdb: 350, rota: "/streaming/350" },
    { id: 7, nome: "Paramount+", id_tmdb: 531, rota: "/streaming/531" }
];

export default function BotoesStreamings() {
    return (
        <>            
        <style type="text/css">
        {`
        .item-4 {
        color: var(--amarelo) !important;
        border-bottom: 1px solid var(--amarelo);
        }
        `}
        </style>

            <div className="container my-5">
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {streamings.map(item => (
                        <Link key={item.id} href={item.rota} className="btn btn-outline-warning">
                            {item.nome}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}