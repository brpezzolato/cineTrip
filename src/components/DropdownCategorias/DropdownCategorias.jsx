"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DropdownCategorias() {
    const [generos, setGeneros] = useState([]);
    const chave = "de7216d4878c63a09391f1c1257f3f7b";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${chave}&language=pt-BR`)
            .then((res) => res.json())
            .then((data) => setGeneros(data.genres || []))
            .catch((err) => console.error("Erro ao buscar gêneros:", err));
    }, []);

    return (
        <li className="nav-item dropdown item-2">
            <a
                className="nav-link dropdown-toggle color-nav text-nowrap"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Categorias
            </a>
            <ul className="dropdown-menu dropdown-generos">
                <div className="d-flex flex-wrap" style={{ minWidth: "300px", maxWidth: "600px" }}>
                    {generos.map((genero) => (
                        <li key={genero.id} className="col-4 mb-2">
                            <Link
                                className="dropdown-item color-nav px-2"
                                href={`/categorias/${genero.id}`}
                            >
                                {genero.name}
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>
        </li>
    );

}
