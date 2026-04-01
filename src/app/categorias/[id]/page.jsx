'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Card from '@/components/Card/Card';
import Link from 'next/link';
import './categorias.css';

export default function CategoriaPage() {
  const params = useParams();
  const id = parseInt(params.id);
  const [filmes, setFilmes] = useState([]);
  const [contador, setContador] = useState(1);

  const chave = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${chave}&language=pt-BR&with_genres=${id}&page=${contador}`;

  // Nome e descrição do gênero (usando switch)
  let nomeGenero;
  let descricaoGenero;

  switch (id) {
    case 28:
      nomeGenero = 'Ação';
      descricaoGenero = 'Explosões, perseguições e muita adrenalina!';
      break;
    case 12:
      nomeGenero = 'Aventura';
      descricaoGenero = 'Explore mundos fantásticos e jornadas épicas.';
      break;
    case 16:
      nomeGenero = 'Animação';
      descricaoGenero = 'Histórias animadas para todas as idades.';
      break;
    case 35:
      nomeGenero = 'Comédia';
      descricaoGenero = 'Prepare-se para boas risadas e leveza.';
      break;
    case 80:
      nomeGenero = 'Crime';
      descricaoGenero = 'Investigações, mistérios e o lado sombrio da lei.';
      break;
    case 99:
      nomeGenero = 'Documentário';
      descricaoGenero = 'Conhecimento, realidade e histórias reais.';
      break;
    case 18:
      nomeGenero = 'Drama';
      descricaoGenero = 'Histórias profundas e emocionantes.';
      break;
    case 10751:
      nomeGenero = 'Família';
      descricaoGenero = 'Diversão para todas as idades.';
      break;
    case 14:
      nomeGenero = 'Fantasia';
      descricaoGenero = 'Magia, criaturas místicas e universos paralelos.';
      break;
    case 36:
      nomeGenero = 'História';
      descricaoGenero = 'Reviva os grandes momentos do passado.';
      break;
    case 27:
      nomeGenero = 'Terror';
      descricaoGenero = 'Só os corajosos continuam daqui pra frente...';
      break;
    case 10402:
      nomeGenero = 'Música';
      descricaoGenero = 'Som, ritmo e emoção nas telas.';
      break;
    case 9648:
      nomeGenero = 'Mistério';
      descricaoGenero = 'Nada é o que parece. Descubra o segredo.';
      break;
    case 10749:
      nomeGenero = 'Romance';
      descricaoGenero = 'Filmes que aquecem o coração (ou quebram 💔)';
      break;
    case 878:
      nomeGenero = 'Ficção Científica';
      descricaoGenero = 'Viagens no tempo, tecnologia e o impossível.';
      break;
    case 10770:
      nomeGenero = 'Cinema TV';
      descricaoGenero = 'Produções pensadas para a telinha.';
      break;
    case 53:
      nomeGenero = 'Thriller';
      descricaoGenero = 'Suspense, tensão e muitas reviravoltas.';
      break;
    case 10752:
      nomeGenero = 'Guerra';
      descricaoGenero = 'Conflitos, batalhas e histórias marcantes.';
      break;
    case 37:
      nomeGenero = 'Faroeste';
      descricaoGenero = 'Cowboys, duelos e o velho oeste americano.';
      break;
    default:
      return invalido();
  }

  function invalido() {
    return (
      <div className="d-flex align-items-center justify-content-center px-3 invalido">
        <div className="text-center d-flex flex-column gap-3">
          <h1 className="text-warning">
            <span className="text-white">Ops...</span>
            <br />
            Gênero <span className="text-white">inválido</span>
            <br />
            por favor volte às categorias
          </h1>

          <Link href="/categorias" className="btn btn-outline-warning">
            Voltar às categorias
          </Link>
        </div>
      </div>
    );
  }

  function handleClickContador() {
    if (contador < 100) setContador(contador + 1);
  }

  function handleClickDiminuir() {
    if (contador > 1) setContador(contador - 1);
  }

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data.results
          .filter((item) => item.poster_path != null)
          .map((item) => ({ ...item, media_type: 'movie' }));
        setFilmes(filtrados);
      })
      .catch((err) => console.error('Erro ao carregar filmes:', err));

    document.title = `Cine Trip | ${nomeGenero}`;
  }, [id, contador]);

  return (
    <>
      <header>
        <title>Cine Trip | Categoria</title>
      </header>
      <style type="text/css">
        {`
          .item-2 {
            color: var(--amarelo) !important;
            border-bottom: 1px solid var(--amarelo);
          }
            .categ {
            color: var(--amarelo) !important;
            }
        `}
      </style>

      <div className="container container-cat">
        <div className="header-cat">
          <h1 className="titulo text-start mt-5">
            Filmes de <span>{nomeGenero}</span>
          </h1>
          <h4 className="sub-titulo text-start">{descricaoGenero}</h4>

          <div className="contador mt-4 d-flex justify-content-start">
            <h4>Página {contador}</h4>
            <i onClick={handleClickDiminuir} className="bi bi-caret-left"></i>
            <i onClick={handleClickContador} className="bi bi-caret-right"></i>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-5 justify-content-center pt-4">
          {filmes.length > 0 ? (
            filmes.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <h3 className="text-center text-white">Nenhum filme encontrado</h3>
          )}
        </div>

        <div className="voltar-topo d-flex m-5 justify-content-center">
          <button className="btn btn-outline-warning" onClick={scrollTop}>
            voltar ao topo <i className="bi bi-arrow-bar-up ps-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}
