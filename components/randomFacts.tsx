import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '@/components/styles/random-facts.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { itim } from '@/config/fonts';

const facts = [
  "I am coding since 10th grade!",
  "I like idle time!",
  "My friends call me AB!",
  "I like to explore different fields!",
  "Python was always my second favourite!",
  "My journey started with MATLAB!",
  "My birthname is Shohag!"
];

export default function RandomFacts({ className }: { className?: string }) {
  return (
    <div className={`${itim.className} flex flex-col justify-between gap-5 ${className}`}>
      <h4 className="text-2xl font-bold text-center">Random Facts</h4>
      <Swiper
        title='Random Facts'
        effect={'cards'}
        initialSlide={7}
        grabCursor={true}
        modules={[EffectCards]}
        className="random-facts text-black"
        cardsEffect={{
          slideShadows: true,
          rotate: true,
          perSlideRotate: 10,
          perSlideOffset: 30,
        }}
      >
        {facts.map((fact, index) => (
          <SwiperSlide className='p-3' key={index} title={fact}>{fact}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
