import "./noticia.css";

export default async function Noticia() {
    const res = await fetch("http://localhost:3000/json/noticias.json");
    const noticias = await res.json();

    return (
        <>
            <style>{`
                .item-3 {
                    color: var(--amarelo) !important;
                    border-bottom: 1px solid var(--amarelo);
                }
            `}</style>

            {noticias.map((noticia, index) => (
                <section className="noticias" key={index}>
                    <div className="superior">
                        <div className="title-noticia">
                            <h2>{noticia.titulo}</h2>
                            <p>{noticia.subtitulo}</p>
                        </div>
                    </div>

                    <div className="meio">
                        <div className="imagem">
                            <img className="bannerNoticia" src={noticia.banner} alt={noticia.titulo} />
                        </div>
                        <div className="paiLinha">
                            <div className="linha"></div>
                        </div>
                    </div>

                    <div className="corpoNoticia">
                        <p>{noticia.conteudo}</p>
                    </div>
                </section>
            ))}
        </>
    );
}
