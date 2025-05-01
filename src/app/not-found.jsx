import Link from "next/link";

export const metadata = {
  title: 'CineTrip | Página não encontrada',
};

export default function NotFound() {
  return (
    <>
      <div className="container text-center not-found" >
        <div className="row">
          <h1 className="text-warning">404 - Cena não encontrada</h1>
          <p className="text-white">Parece que o rolo desse filme se perdeu...</p>
          <div className="col-md-12 text-center">
            <img src="/not-found.png"
              className="img-fluid img-speak"
            />
          </div>
          <Link href="/"><button type="submit" className="btn btn btn-outline-warning" >Voltar</button></Link>
        </div>
      </div>
    </>
  );
}
