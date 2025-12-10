'use client';

import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/components/styles/slide-card.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Card, CardFooter } from '@nextui-org/react';
import Link from 'next/link';

interface certificateImage {
    src: string;
    title: string;
    link: string;
}

interface SlideCardProps {
    images: readonly certificateImage[];
}

export default function SlideCard({ images }: SlideCardProps) {

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 60,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="swiper-slide-card overflow-hidden"
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            autoHeight={true}
        >
            {
                images.map((image, index) => (
                    <SwiperSlide title={image.title} key={index} className='overflow-hidden rounded-2xl shadow-xl'>
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none w-full h-full bg-white"
                            as={Link}
                            href={image.link}
                            target='_blank'
                        >
                            <Image
                                alt={image.title}
                                className="object-cover p-5 mb-10"
                                src={image.src}
                                width={600}
                                height={400}
                                quality={85}
                                loading="lazy"
                            />
                            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] ml-1 z-10">
                                <p className="text-md sm:text-lg font-bold text-black/80">{image.title}</p>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}