'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { categorias } from '@/lib/dados';

export default function DropdownCategorias({ ativo = false }) {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();
  const ref = useRef(null);

  // Fecha ao trocar de página
  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  // Fecha ao clicar fora ou apertar Esc
  useEffect(() => {
    if (!aberto) return;

    function aoClicarFora(e) {
      if (ref.current && !ref.current.contains(e.target)) setAberto(false);
    }
    function aoApertarTecla(e) {
      if (e.key === 'Escape') setAberto(false);
    }

    document.addEventListener('mousedown', aoClicarFora);
    document.addEventListener('keydown', aoApertarTecla);
    return () => {
      document.removeEventListener('mousedown', aoClicarFora);
      document.removeEventListener('keydown', aoApertarTecla);
    };
  }, [aberto]);

  return (
    <li ref={ref} className={`nav-item dropdown ${aberto ? 'show' : ''}`}>
      <button
        type="button"
        className={`nav-link dropdown-toggle color-nav text-nowrap ${ativo ? 'active' : ''}`}
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls="menu-categorias"
      >
        Categorias
      </button>
      <ul
        id="menu-categorias"
        className={`dropdown-menu dropdown-generos ${aberto ? 'show' : ''}`}
      >
        <li className="col-4 mb-2">
          <Link className="dropdown-item color-nav px-2" href="/categorias">
            Geral
          </Link>
        </li>
        {categorias.map((genero) => (
          <li key={genero.id} className="col-4 mb-2">
            <Link
              className="dropdown-item color-nav px-2"
              href={`/categorias/${genero.id}`}
            >
              {genero.nome}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
