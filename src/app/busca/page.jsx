"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Card from "@/components/Card/Card";
import "./page.css"


export default function Busca() {
    const searchParams = useSearchParams()
    const valorBuscado = searchParams.get("valorBuscado")
    const [filmes, setFilmes] = useState([])

    const chave = "de7216d4878c63a09391f1c1257f3f7b"
    const url = "https://api.themoviedb.org/3/search/multi"

    useEffect(() => {
        if (valorBuscado) {
            fetch(`${url}?api_key=${chave}&query=${encodeURIComponent(valorBuscado)}&language=pt-BR`)
                .then(response => response.json())
                .then(data => setFilmes(data.results || []))
                .catch(error => console.error("Erro:", error))
        }
    }, [valorBuscado])

    const filmesEncontrados = filmes.filter(item => item.poster_path != null)

    function exibirFilmes() {
        if (filmesEncontrados.length > 0) {
            return (<div className="d-flex flex-wrap gap-5 justify-content-center pt-5">
                {filmesEncontrados.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>)

        } else {
            return (
                <div className="d-flex justify-content-center align-items-center nao-encontrado">
                    <h2><span>Nenhum</span> filme encontrado, desculpe.</h2>
                </div>
            )
        }
    }

    return (
        <>
            <div className="title pt-5 ps-2 ps-lg-5">
                <h1 className="titulo">Resultados para: <span>{valorBuscado}</span></h1>
                <h4 className="sub-titulo">Mídias encontradas: {filmesEncontrados.length}</h4>
            </div>

            <div className="container">
                {exibirFilmes()}
            </div>
        </>
    )
}