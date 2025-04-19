import Link from "next/link";
import './Streamings.css';

export default function Streamings({ item }) {
    return (
        <Link href={`${item.rota}`}>
            <img className="streaming-logo" src={item.imagem} alt="logo" />
        </Link>
    );
}