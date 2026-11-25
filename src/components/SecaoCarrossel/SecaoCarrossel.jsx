import CarroselCard from '@/components/CarroselCard/CarroselCard';

/** Título destacado + carrossel de cards. Não renderiza nada se a lista vier vazia. */
export default function SecaoCarrossel({ titulo, destaque, itens, top10 = false }) {
  if (!itens?.length) return null;

  return (
    <section className="treanding">
      <div className="titulo-destaque mt-5 mb-5">
        <h2 className="h1">
          {titulo} <span>{destaque}</span>
        </h2>
      </div>
      <CarroselCard movies={itens} top10={top10} />
    </section>
  );
}
