import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import styles from './Slider.module.css';

import img1 from '../../../../public/image/event1.jpg';
import img2 from '../../../../public/image/event2.jpg';
import img3 from '../../../../public/image/event3.jpg';

export default function Slider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className={styles.swiper_wrapper}
      breakpoints={{
        360: {
          slidesPerView: 1,
        },
        744: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <div className={styles.swiper_wrapper} style={{ width: '300px' }}>
          <div className={styles.test}>
            <Image src={img1} alt="Event 1" className={styles.image} />
            <h3 className={styles.title}>Music Events</h3>
            <p className={styles.text}>Concept</p>
            <p className={styles.text}>Service</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.swiper_wrapper} style={{ width: '300px' }}>
          <div className={styles.test}>
            <Image src={img2} alt="Event 2" className={styles.image} />
            <h3 className={styles.title}>Music Events</h3>
            <p className={styles.text}>Concept</p>
            <p className={styles.text}>Service</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.swiper_wrapper} style={{ width: '300px' }}>
          <div className={styles.test}>
            <Image src={img3} alt="Event 3" className={styles.image} />
            <h3 className={styles.title}>Music Events</h3>
            <p className={styles.text}>Concept</p>
            <p className={styles.text}>Service</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
