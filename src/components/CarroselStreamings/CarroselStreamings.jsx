'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { streamings } from '@/lib/dados';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/components/CarroselCard/CarroselCard.css';
import './CarrosselStreamings.css';

export default function CarroselStreamings() {
  return (
    <section>
      <div className="titulo-destaque mt-5 mb-5">
        <h2 className="h1">
          Streamings mais <span>famosos</span>
        </h2>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        navigation
        modules={[Navigation]}
        className="swiper-categorias swiper-streamings"
        breakpoints={{ 768: { spaceBetween: 20 } }}
        watchOverflow
      >
        {streamings.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/streaming/${item.id_tmdb}`}>
              <img className="streamings-logo" src={item.imagem} alt={item.nome} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
