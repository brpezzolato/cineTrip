"use client"

import Card from "@/components/Card/Card"
import "bootstrap/dist/css/bootstrap.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./CarroselCard.css"

export default function Carrosel({ movies = [], tipo }) {
    return (
        <>
            <style type="text/css">
                {`.movie-card:hover {
                    transform: translateY(0px);
                    filter: brightness(80%);
                    transition: .5s;
                }`}
            </style>
            <div className="container-fluid px-0">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={0}
                    loop={false}
                    breakpoints={{
                        0: { slidesPerView: 1.5 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1324: { slidesPerView: 5 },
                    }}
                >
                    {movies.map((item) => (
                        <SwiperSlide key={item.id} className="slide-ajustado">
                            <Card item={item} tipo={tipo} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}