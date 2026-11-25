'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropdownCategorias from '@/components/DropdownCategorias/DropdownCategorias';

const LINKS = [
  { href: '/blog', label: 'Blog de Cinema' },
  { href: '/streaming', label: 'Nos Streamings' },
  { href: '/contato', label: 'Fale Conosco' },
];

function estaAtivo(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLinks() {
  const pathname = usePathname();

  const classeLink = (href) =>
    `nav-link color-nav text-nowrap ${estaAtivo(pathname, href) ? 'active' : ''}`;

  return (
    <ul className="navbar-nav w-100 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-0 gap-lg-2 position-relative">
      <li className="nav-item">
        <Link
          className={classeLink('/')}
          href="/"
          aria-current={estaAtivo(pathname, '/') ? 'page' : undefined}
        >
          Home
        </Link>
      </li>

      <DropdownCategorias ativo={estaAtivo(pathname, '/categorias')} />

      {LINKS.map(({ href, label }) => (
        <li className="nav-item" key={href}>
          <Link
            className={classeLink(href)}
            href={href}
            aria-current={estaAtivo(pathname, href) ? 'page' : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
