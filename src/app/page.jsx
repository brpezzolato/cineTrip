"use client"

import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import Carrosel from "@/components/Carrosel/Carrossel";
import "./index.css";

export default function Home() {
  const [cabecalho, setCabecalho] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [emAlta, setEmAlta] = useState([]);
  const [cartaz, setCartaz] = useState([]);
  const [avaliados, setAvaliados] = useState([]);

  const chave = "de7216d4878c63a09391f1c1257f3f7b";
  const url = "https://api.themoviedb.org/3/";

  useEffect(() => {
    fetch("/json/carrosel.json")
      .then(res => res.json())
      .then(data => setCabecalho(data))
      .catch(err => console.error("Erro ao carregar os dados do Carrosel:", err));

    //LER OS MAIS FALADOS
    fetch(`${url}trending/movie/week?api_key=${chave}&language=pt-BR`)
      .then(response => response.json())
      .then(data => setEmAlta(data.results || []))
      .catch(error => console.error("Erro:", error));

    //LER OS MAIS POPULARES do streaming
    fetch(`${url}https://api.themoviedb.org/3/discover/movie?api_key=${chave}&language=pt-BR&sort_by=popularity.desc&watch_region=BR&with_watch_monetization_types=flatrate`)
      .then(response => response.json())
      .then(data => setPopulares(data.results || []))
      .catch(error => console.error("Erro:", error));

    //LER NOS CINEMAS
    fetch(`${url}movie/now_playing?api_key=${chave}&language=pt-BR`)
      .then(response => response.json())
      .then(data => setCartaz(data.results || []))
      .catch(error => console.error("Erro:", error));

    //LER OS MAIS BEM AVALIADOS
    fetch(`${url}movie/top_rated?api_key=${chave}&language=pt-BR`)
      .then(response => response.json())
      .then(data => setAvaliados(data.results || []))
      .catch(error => console.error("Erro:", error));
  }, []);

  return (
    <>
      <style type="text/css">
        {`.item-1 {
          color: var(--amarelo) !important;
          border-bottom: 1px solid var(--amarelo);
          }`}
      </style>
      <Carrosel movies={cabecalho} />


    </>
  );
}