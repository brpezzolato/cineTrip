'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { categorias } from '@/lib/dados';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/components/CarroselCard/CarroselCard.css';
import './CarrosselCategorias.css';

export default function CarroselCategorias() {
  return (
    <section>
      <div className="titulo-destaque mt-5 mb-5">
        <h2 className="h1">
          Todas as <span>Categorias</span>
        </h2>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        navigation
        modules={[Navigation]}
        className="swiper-categorias"
        breakpoints={{ 768: { spaceBetween: 20 } }}
        watchOverflow
      >
        {categorias.map((categoria) => (
          <SwiperSlide key={categoria.id}>
            <Link
              href={`/categorias/${categoria.id}`}
              className="genero-link text-center d-block"
            >
              <div className="genero-bolinha mx-auto">
                <img src={categoria.imagem} alt="" className="genero-imagem" />
              </div>
              <p className="mt-2">{categoria.nome}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
