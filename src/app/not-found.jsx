import EstadoVazio from '@/components/EstadoVazio/EstadoVazio';

export const metadata = { title: 'Página não encontrada' };

export default function NotFound() {
  return (
    <EstadoVazio
      titulo="Cena não encontrada"
      mensagem="Parece que o rolo desse filme se perdeu..."
    />
  );
}
