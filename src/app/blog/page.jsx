"use client"

import { useEffect, useState } from "react"
import Oscar from "@/components/Oscar/Oscar";
import Noticias from "@/components/Noticias/Noticias";
import "./blog.css"

export default function Blog() {

    const [oscarData, setOscarData] = useState([]);
    const [noticiasData, setNoticiasData] = useState([]);

    useEffect(() => {
        fetch("/json/oscar.json")
            .then(res => res.json())
            .then(data => setOscarData(data))
            .catch(err => console.error("Erro ao carregar os dados do Oscar:", err));

        fetch("/json/noticias.json")
            .then(res => res.json())
            .then(data => setNoticiasData(data))
            .catch(err => console.error("Erro ao carregar as notícias:", err));
    }, []);


    return (
        <>

            <section className="design" id="design">
                <div className="container">
                    <div className="designtitle">
                        <h2>Melhores Filmes</h2>
                        <p>os 9 últimos ganhadores do prêmio oscar de melhor filme</p>
                    </div>
                    <div className="design-content">
                        {oscarData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="galeria">
                                        <Oscar item={item} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="blog" id="blog">
                <div className="container">
                    <div className="title1">
                        <h2>Tudo sobre cinema</h2>
                        <p>fique por dentro das últimas noticias do mundo cinematográfico</p>
                    </div>
                    <div className="blog-content">
                        {noticiasData.map((desc, noticia) => {
                            return (
                                <div key={noticia}>
                                    <div className="noticias">
                                        <Noticias imagem={desc.imagem} titulo={desc.titulo} descricao={desc.descricao} data={desc.data} horario={desc.horario} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>




        </>
    )
}
