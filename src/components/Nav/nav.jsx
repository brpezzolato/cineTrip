import './nav.css';
import { Suspense } from 'react';
import Link from 'next/link';
import Busca from '@/components/Busca/busca';
import NavLinks from './NavLinks';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg pt-2 px-1">
      <div className="container">
        <Link className="navbar-brand me-3" href="/">
          <img src="/logo.png" alt="CineTrip - página inicial" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Abrir menu de navegação"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="w-100 w-lg-50 pt-3 pt-lg-0 mb-2 mb-lg-0">
            <Suspense fallback={null}>
              <Busca />
            </Suspense>
          </div>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
