import Link from "next/link";

export default function Oscar({ item }) {
    return (
        <>
            <Link href={`/filme/${item.tmdb_id}`}>
                <div className="design-item">
                    <div className="design-img">
                        <img src={item.image} />
                        <span>
                            <i className="bi bi-star-fill"></i>  22
                        </span>
                        <span className="quadrado2"><i className="bi bi-calendar-check-fill"></i> 
                            {item.data}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
}