import "./nav.css";
import Link from "next/link";
import Busca from '@/components/Busca/busca';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg pt-2 px-1">
            <div className="container">
                <Link className="navbar-brand me-3" href="/">
                    <img src="/logo.png" alt="Logo" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className="w-100 w-lg-50 pt-3 pt-lg-0 mb-2 mb-lg-0">
                        <Busca />
                    </div>

                    <ul className="navbar-nav w-100 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-0 gap-lg-3 position-relative">
                        <li className="nav-item">
                            <Link className="nav-link color-nav text-nowrap item-1" href="/">Home</Link>
                        </li>

                        <li className="nav-item dropdown item-2">
                            <a
                                className="nav-link dropdown-toggle color-nav text-nowrap"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorias
                            </a>
                            <ul className="dropdown-menu pt-0 pb-0 pt-lg-2 pb-lg-2">
                                <li><Link className="dropdown-item color-nav" href="#">Ação</Link></li>
                                <li><Link className="dropdown-item color-nav" href="#">Drama</Link></li>
                                <li><Link className="dropdown-item color-nav" href="#">Comédia</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item item-3">
                            <Link className="nav-link color-nav text-nowrap" href="/blog">Blog de Cinema</Link>
                        </li>
                        <li className="nav-item item-4">
                            <Link className="nav-link color-nav text-nowrap" href="/sobre">Sobre Nós</Link>
                        </li>
                        <li className="nav-item item-5">
                            <Link className="nav-link color-nav text-nowrap" href="/contato">Fale Conosco</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}