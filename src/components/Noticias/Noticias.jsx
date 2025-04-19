import Link from 'next/link';
export default function Noticias({ data, horario, titulo, descricao, imagem }) {
    return (
        <>
            <div className="blog-item">
                <div className="blog-img">
                    <img src={imagem} alt="" />
                </div>
                <div className="blog-text">
                    <span>{data} às {horario}</span>
                    <h2>{titulo}</h2>
                    <p>
                        {descricao}
                    </p>
                    <Link href="#">
                        Ler Mais
                    </Link>
                </div>
            </div>
        </>
    );
}