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
        slidesPerView={5}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        className="swiper-categorias"
        breakpoints={{
          0: { slidesPerView: 1 },
          280: { slidesPerView: 1.4 },
          347: { slidesPerView: 1.8 },
          396: { slidesPerView: 2 },
          500: { slidesPerView: 2.4 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1146: { slidesPerView: 4.9 },
          1246: { slidesPerView: 5.4 },
        }}
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
