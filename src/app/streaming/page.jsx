"use client"

import { useEffect, useState } from "react";
import CarroselCard from "@/components/CarroselCard/CarroselCard";
import Streamings from "@/components/Streamings/Streamings";
import CarroselStreamings from "@/components/CarroselStreamings/CarroselStreamings";
import "./streaming.css";


export default function BotoesStreamings() {

    const [emAltaNetflix, setEmAltaNetflix] = useState([]);
    const [emAltaDisney, setEmAltaDisney] = useState([]);
    const [emAltaPrime, setEmAltaPrime] = useState([]);
    const [emAltaApple, setEmAltaApple] = useState([]);
    const [emAltaParamount, setEmAltaParamount] = useState([]);
    const [emAltaMax, setEmAltaMax] = useState([]);
    const [emAltaGlobo, setEmAltaGlobo] = useState([]);



    const chave = "de7216d4878c63a09391f1c1257f3f7b";
    const url = "https://api.themoviedb.org/3/";

    useEffect(() => {

        //NETFLIX
        fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&with_watch_providers=8&watch_region=BR&page=1`)
            .then(response => response.json())
            .then(data => setEmAltaNetflix(data.results || []))
            .catch(error => console.error("Erro:", error));

        //PRIME
        fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&with_watch_providers=119&watch_region=BR&page=1`)
            .then(response => response.json())
            .then(data => setEmAltaPrime(data.results || []))
            .catch(error => console.error("Erro:", error));

        //DISNEY
        fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&with_watch_providers=337&watch_region=BR&page=1`)
            .then(response => response.json())
            .then(data => setEmAltaDisney(data.results || []))
            .catch(error => console.error("Erro:", error));

        //APPLE TV+
        fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&with_watch_providers=350&watch_region=BR&page=1`)
            .then(response => response.json())
            .then(data => setEmAltaApple(data.results || []))
            .catch(error => console.error("Erro:", error));

        //PARAMOUNT
        fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&with_watch_providers=531&watch_region=BR&page=1`)
            .then(response => response.json())
            .then(data => setEmAltaParamount(data.results || []))
            .catch(error => console.error("Erro:", error));

        //MAX
        fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&with_watch_providers=1899&watch_region=BR&page=1`)
            .then(response => response.json())
            .then(data => setEmAltaMax(data.results || []))
            .catch(error => console.error("Erro:", error));

        //GLOBO
        fetch(`${url}discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&with_watch_providers=307&watch_region=BR&page=1`)
            .then(response => response.json())
            .then(data => setEmAltaGlobo(data.results || []))
            .catch(error => console.error("Erro:", error));


    }, []);

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
            <div className="container">

                <CarroselStreamings />

                <div className="treanding">
                    <div className="titulo-destaque mt-5 mb-5">
                        <h1>Top 10 da <span>Netflix</span></h1>
                    </div>
                    <div className="carrosel-trending">
                        <CarroselCard id="carrosel-netflix" movies={emAltaNetflix.slice(0, 10)} tipo="movie" />
                    </div>
                </div>

                <div className="treanding">
                    <div className="titulo-destaque mt-5 mb-5">
                        <h1>Top 10 da <span>Prime vídeo</span></h1>
                    </div>
                    <div className="carrosel-trending">
                        <CarroselCard id="carrosel-prime" movies={emAltaPrime.slice(0, 10)} tipo="movie" />
                    </div>
                </div>

                <div className="treanding">
                    <div className="titulo-destaque mt-5 mb-5">
                        <h1>Top 10 da <span>Disney +</span></h1>
                    </div>
                    <div className="carrosel-trending">
                        <CarroselCard id="carrosel-disney" movies={emAltaDisney.slice(0, 10)} tipo="movie" />
                    </div>
                </div>

                <div className="treanding">
                    <div className="titulo-destaque mt-5 mb-5">
                        <h1>Top 10 da <span>Apple TV+</span></h1>
                    </div>
                    <div className="carrosel-trending">
                        <CarroselCard id="carrosel-apple" movies={emAltaApple.slice(0, 10)} tipo="movie" />
                    </div>
                </div>

                <div className="treanding">
                    <div className="titulo-destaque mt-5 mb-5">
                        <h1>Top 10 da <span>Paramount</span></h1>
                    </div>
                    <div className="carrosel-trending">
                        <CarroselCard id="carrosel-paramount" movies={emAltaParamount.slice(0, 10)} tipo="movie" />
                    </div>
                </div>

                <div className="treanding">
                    <div className="titulo-destaque mt-5 mb-5">
                        <h1>Top 10 da <span>Max</span></h1>
                    </div>
                    <div className="carrosel-trending">
                        <CarroselCard id="carrosel-max" movies={emAltaMax.slice(0, 10)} tipo="movie" />
                    </div>
                </div>

                <div className="treanding">
                    <div className="titulo-destaque mt-5 mb-5">
                        <h1>Top 10 da <span>Globo</span></h1>
                    </div>
                    <div className="carrosel-trending">
                        <CarroselCard id="carrosel-globo" movies={emAltaGlobo.slice(0, 10)} tipo="movie" />
                    </div>
                </div>

            </div>
        </>
    );
}