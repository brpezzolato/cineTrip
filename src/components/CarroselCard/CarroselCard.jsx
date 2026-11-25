'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card from '@/components/Card/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarroselCard.css';

const BREAKPOINTS = {
  0: { slidesPerView: 1.3, spaceBetween: 12 },
  330: { slidesPerView: 1.6, spaceBetween: 14 },
  480: { slidesPerView: 1.8, spaceBetween: 14 },
  768: { slidesPerView: 3, spaceBetween: 16 },
  1024: { slidesPerView: 4.5, spaceBetween: 16 },
  1280: { slidesPerView: 5.1, spaceBetween: 18 },
  1536: { slidesPerView: 6, spaceBetween: 20 },
  1800: { slidesPerView: 7, spaceBetween: 20 },
};

/**
 * Carrossel horizontal de cards.
 * Com `top10`, mostra só os 10 primeiros com o número da posição.
 */
export default function CarroselCard({ movies = [], top10 = false }) {
  const itens = top10 ? movies.slice(0, 10) : movies;

  return (
    <div className="container-fluid px-0 carrossel-cards">
      <Swiper modules={[Navigation]} navigation breakpoints={BREAKPOINTS}>
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
