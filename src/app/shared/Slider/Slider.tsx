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
import arrow from '../../../../public/icons/down-arrow.svg';

export default function Slider() {
  return (
    <Swiper
      className={styles.test}
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
      <SwiperSlide className={styles.wrapper}>
        <div>
          <Image src={img1} alt="Event 1" className={styles.image} />
          <h3 className={styles.title}>Music Events</h3>
          <div className={styles.text_wrapper}>
            <p className={styles.text}>Concept</p>
            <Image src={arrow} alt="arrow down" />
          </div>

          <div className={styles.text_wrapper}>
            <p className={styles.text}>Service</p>
            <Image src={arrow} alt="arrow down" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.wrapper}>
        <div>
          <Image src={img2} alt="Event 2" className={styles.image} />
          <h3 className={styles.title}>Music Events</h3>
          <div className={styles.text_wrapper}>
            <p className={styles.text}>Concept</p>
            <Image src={arrow} alt="arrow down" />
          </div>

          <div className={styles.text_wrapper}>
            <p className={styles.text}>Service</p>
            <Image src={arrow} alt="arrow down" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.wrapper}>
        <div>
          <Image src={img3} alt="Event 3" className={styles.image} />
          <h3 className={styles.title}>Music Events</h3>
          <div className={styles.text_wrapper}>
            <p className={styles.text}>Concept</p>
            <Image src={arrow} alt="arrow down" />
          </div>

          <div className={styles.text_wrapper}>
            <p className={styles.text}>Service</p>
            <Image src={arrow} alt="arrow down" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
