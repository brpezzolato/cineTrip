'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card from '@/components/Card/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarroselCard.css';

// Só o espaçamento muda com a tela; a largura dos cards vem do CSS.
const BREAKPOINTS = {
  0: { spaceBetween: 12 },
  768: { spaceBetween: 16 },
  1280: { spaceBetween: 20 },
};

/**
 * Carrossel horizontal de cards.
 * Com `top10`, mostra só os 10 primeiros com o número da posição.
 */
export default function CarroselCard({ movies = [], top10 = false }) {
  const itens = top10 ? movies.slice(0, 10) : movies;

  return (
    <div className="container-fluid px-0 carrossel-cards">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView="auto"
        spaceBetween={12}
        breakpoints={BREAKPOINTS}
        watchOverflow
      >
        {itens.map((item, index) => (
          <SwiperSlide key={`${item.media_type}-${item.id}`}>
            {top10 ? (
              <div className="top10-wrapper">
                <div className="numero-top10-wrapper">
                  <img
                    src={`/numeros/num${index + 1}.png`}
                    alt={`Top ${index + 1}`}
                    className="numero-top10"
                  />
                </div>
                <Card item={item} />
              </div>
            ) : (
              <Card item={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
