"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "./CarroselCategorias.css";

export default function CarroselCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("/json/categorias.json")
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((err) => console.error("Erro ao carregar categorias:", err));
  }, []);

  return (
    <>
      <div className="titulo-destaque mt-5 mb-5">
        <h1>Todas as <span>Categorias</span></h1>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="swiper-categorias pb-5"
        breakpoints={{
          320: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4.7 },
          1324: { slidesPerView: 5 },
        }}
      >
        {categorias.map((categoria) => (
          <SwiperSlide key={categoria.id}>
            <Link
              href={`/categorias/${categoria.id}`}
              className="genero-link text-center d-block"
            >
              <div className="genero-bolinha mx-auto">
                <img
                  src={categoria.imagem}
                  alt={categoria.nome}
                  className="genero-imagem"
                  onError={(e) => {
                    e.currentTarget.src = "/imagens-generos/default.jpg";
                  }}
                />
              </div>
              <p className="mt-2">{categoria.nome}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
