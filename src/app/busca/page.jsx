"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Card from "@/components/Card/Card"
import "./page.css"

export default function Streaming() {
    const params = useParams()
    const id_tmdb = params.id
    const [filmes, setFilmes] = useState([])
    const [series, setSeries] = useState([])

    const chave = "de7216d4878c63a09391f1c1257f3f7b"

    const urlFilmes = `https://api.themoviedb.org/3/discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&watch_region=BR&with_watch_monetization_types=flatrate&with_watch_providers=${id_tmdb}`
    const urlSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&watch_region=BR&with_watch_monetization_types=flatrate&with_watch_providers=${id_tmdb}`

    useEffect(() => {
        fetch(urlFilmes)
            .then(res => res.json())
            .then(data => {
                const resultados = data.results || [];
                resultados.forEach(item => item.media_type = "movie");
                setFilmes(resultados);
            })
            .catch(err => console.error("Erro ao carregar filmes:", err))

        fetch(urlSeries)
            .then(res => res.json())
            .then(data => {
                const resultados = data.results || [];
                resultados.forEach(item => item.media_type = "tv");
                setSeries(resultados);
            })
            .catch(err => console.error("Erro ao carregar séries:", err))
    }, [id_tmdb])

    const resultados = filmes.concat(series)

    return (
        <div className="container">
            <h1 className="titulo text-center pt-5">Filmes e Séries disponíveis</h1>
            <div className="d-flex flex-wrap gap-5 justify-content-center pt-4">
                {resultados.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    )
}