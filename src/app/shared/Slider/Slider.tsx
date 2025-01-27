import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import styles from './Slider.module.css';

import img1 from '../../../../public/image/event1.jpg';
import img2 from '../../../../public/image/event2.jpg';
import img3 from '../../../../public/image/event3.jpg';

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      pagination={{ clickable: true }}
      centeredSlidesBounds={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 1,
        },
        744: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      <SwiperSlide>
        <Image src={img1} alt="Event 1" />
        <h3>Music Events</h3>
      </SwiperSlide>

      <SwiperSlide>
        <Image src={img2} alt="Event 2" />
        <h3>Music Events</h3>
      </SwiperSlide>

      <SwiperSlide>
        <Image src={img3} alt="Event 3" />
        <h3>Music Events</h3>
      </SwiperSlide>
    </Swiper>
  );
}
