import { FC } from 'react'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ISlider {}

export const Slider: FC<ISlider> = ({ sliderItems }) => {
   return (
      <Swiper
         spaceBetween={50}
         slidesPerView={3}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
      >
         {sliderItems}
         <SwiperSlide>Slide 1</SwiperSlide>
         <SwiperSlide>Slide 2</SwiperSlide>
         <SwiperSlide>Slide 3</SwiperSlide>
         <SwiperSlide>Slide 4</SwiperSlide>
         ...
      </Swiper>
   )
}
