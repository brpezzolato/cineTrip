import Card from '@/components/Card/Card';

/** Grade de cards de filmes/séries. */
export default function GradeTitulos({ itens, mensagemVazia = 'Nenhum título encontrado.' }) {
  if (!itens?.length) {
    return <h3 className="text-center text-white pt-5">{mensagemVazia}</h3>;
  }

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center pt-4">
      {itens.map((item) => (
        <Card key={`${item.media_type}-${item.id}`} item={item} />
      ))}
    </div>
  );
}
