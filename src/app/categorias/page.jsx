"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CategoriasPage() {
    const [generos, setGeneros] = useState([]);
    const chave = "de7216d4878c63a09391f1c1257f3f7b";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${chave}&language=pt-BR`)
            .then((res) => res.json())
            .then((data) => setGeneros(data.genres || []))
            .catch((err) => console.error("Erro ao buscar categorias:", err));
    }, []);

    return (
        <>
           <style type="text/css">
        {`
          .item-2 {
            color: var(--amarelo) !important;
            border-bottom: 1px solid var(--amarelo);
          }
            .categ {
            color: var(--amarelo) !important;
            }
        `}
      </style>

            <div className="container my-5">
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {generos.map((genero) => (
                        <Link
                            key={genero.id}
                            href={`/categorias/${genero.id}`}
                            className="btn btn-outline-warning"
                        >
                            {genero.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
