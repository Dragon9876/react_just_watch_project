import { FC } from 'react'

import { Typography } from '../../../../components'

import { Swiper, SwiperSlide } from 'swiper/react'
import { MOVIES_API_IMAGES_PATH } from '../../../../config'
import { useGetAllSimilarMoviesQuery } from '../../../../services/api'

import styles from '../MovieTrailers/MovieTrailers.module.scss'

interface ISimilarMovies {
   movieID: number
}

export const SimilarMovies: FC<ISimilarMovies> = ({ movieID }) => {
   const { data: similarMovies } = useGetAllSimilarMoviesQuery(movieID, {
      skip: !movieID,
   })
   return (
      <div>
         <Typography className={styles.movie__trailers_title}>
            People who liked Pirates of the Caribbean: At World's End also liked
         </Typography>
         {/* <Slider sliderItems={similarMovies.results} /> */}

         <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
         >
            {similarMovies
               ? similarMovies.results.map((similarMovie) => (
                    <SwiperSlide key={similarMovie.id}>
                       <img src={`${MOVIES_API_IMAGES_PATH}${similarMovie.poster_path}`} alt='' />
                    </SwiperSlide>
                 ))
               : null}
         </Swiper>
      </div>
   )
}
