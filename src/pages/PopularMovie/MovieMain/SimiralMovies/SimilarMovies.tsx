import { FC } from 'react'

import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react'

import axios from 'axios'

import { Typography } from '../../../../components'

import { MOVIES_API_IMAGES_PATH, MOVIES_API_KEY } from '../../../../config'

import styles from '../MovieTrailers/MovieTrailers.module.scss'

interface ISimilarMovies {
   movieID: number
   movieTitle: string
}

export const SimilarMovies: FC<ISimilarMovies> = ({ movieID, movieTitle }) => {
   const { data: similarMovies } = useQuery({
      queryKey: ['similar_movies', movieID],
      enabled: !!movieID,
      queryFn: ({ queryKey }) => {
         return axios
            .get(`https://api.themoviedb.org/3/movie/${queryKey[1]}/similar`, {
               params: {
                  api_key: MOVIES_API_KEY,
                  page: 1,
               },
            })
            .then((response) => response.data)
      },
   })

   return (
      <div>
         <Typography className={styles.movie__trailers_title}>
            People who liked {movieTitle} also liked
         </Typography>

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
