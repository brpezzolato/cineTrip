'use client';

import { useEffect } from 'react';
import EstadoVazio from '@/components/EstadoVazio/EstadoVazio';

export default function Erro({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EstadoVazio
      titulo="Ops, algo deu errado"
      mensagem="Não conseguimos carregar esta página agora. Tente novamente em instantes."
      imagem="/mascot/SadIcon.png"
    >
      <button type="button" className="btn btn-warning" onClick={reset}>
        Tentar novamente
      </button>
    </EstadoVazio>
  );
}
