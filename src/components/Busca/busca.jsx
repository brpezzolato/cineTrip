'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Busca() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const termoAtual = searchParams.get('q') ?? '';
  const [valor, setValor] = useState(termoAtual);

  // Mantém o campo sincronizado ao navegar entre buscas
  useEffect(() => {
    setValor(termoAtual);
  }, [termoAtual]);

  function buscar(e) {
    e.preventDefault();
    const termo = valor.trim();
    if (!termo) return;
    router.push(`/busca?q=${encodeURIComponent(termo)}`);
  }

  return (
    <form className="d-flex form-search ms-3 me-4" role="search" onSubmit={buscar}>
      <div className="input-group">
        <input
          className="form-control search ps-3"
          type="search"
          name="q"
          placeholder="Busque um título de filme ou série"
          aria-label="Buscar filmes e séries"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button className="input-group-text btn-search" type="submit" aria-label="Buscar">
          <i className="bi bi-search" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
}
