import Link from 'next/link';
import './footer.css';

const NAVEGACAO = [
  { href: '/', label: 'Home' },
  { href: '/categorias', label: 'Categorias' },
  { href: '/streaming', label: 'Nos Streamings' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Fale Conosco' },
];

const REDES = [
  { href: 'https://www.instagram.com/', label: 'Instagram', icone: 'bi-instagram' },
  { href: 'https://www.youtube.com/', label: 'YouTube', icone: 'bi-youtube' },
  { href: 'https://discord.com/', label: 'Discord', icone: 'bi-discord' },
];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer-cinetrip pt-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4 text-center text-md-start div-logo-footer">
            <img src="/logo.png" alt="CineTrip" className="footer-logo mb-3" />
            <p className="footer-description">
              CineTrip é sua plataforma para explorar o melhor do cinema e das
              séries. Descubra, pesquise e se conecte com histórias
              inesquecíveis.
            </p>
          </div>

          <nav className="col-6 col-md-2 mb-3 navigation" aria-label="Rodapé">
            <h2 className="footer-title h5">Navegação</h2>
            <ul className="nav flex-column">
              {NAVEGACAO.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-6 col-md-2 mb-3 navigation">
            <h2 className="footer-title h5">Redes</h2>
            <ul className="nav flex-column">
              {REDES.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link" target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 mb-3 newsletter">
            <h2 className="footer-title text-center h5">Newsletter</h2>
            <p className="footer-text text-center">
              Em breve você poderá receber as novidades da semana no seu e-mail.
              Enquanto isso, acompanhe o <Link href="/blog" className="footer-link">blog</Link>.
            </p>
          </div>
        </div>

        <div className="border-footer mt-4 pt-3 pb-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 text-white-50">
            © {ano} CineTrip. Dados de filmes e séries fornecidos pelo{' '}
            <a
              href="https://www.themoviedb.org/"
              className="text-white-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDB
            </a>
            .
          </p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            {REDES.map(({ href, label, icone }) => (
              <a
                key={href}
                href={href}
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <i className={`bi ${icone}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
