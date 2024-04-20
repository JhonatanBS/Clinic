import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectFade, EffectFlip,  } from 'swiper/modules';

import 'swiper/css';
import styles from "./styles.module.css";

import reception from "../../assets/reception.jpg";
import receptionCenter from "../../assets/receptioncenter.jpg";
import room from "../../assets/room.jpg";

export function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      loop={false}
      pagination={{ clickable: true }}
      navigation
      modules={[EffectCards]} effect="cards"
      style={{height: 700, width: 600}}
    >
      <SwiperSlide>
        <img src={reception} className={styles.slides}></img>
      </SwiperSlide>

      <SwiperSlide>
        <img src={receptionCenter} className={styles.slides}></img>
      </SwiperSlide>

      <SwiperSlide>
        <img src={room} className={styles.slides}></img>
      </SwiperSlide>
    </Swiper>
  )
}