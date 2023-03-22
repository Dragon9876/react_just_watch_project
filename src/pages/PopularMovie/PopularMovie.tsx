import { FC } from 'react'

import { MovieInfo } from './MovieInfo/MovieInfo'
import { MovieMain } from './MovieMain/MovieMain'
import { MoviePoster } from './MoviePoster/MoviePoster'
import { MovieTrailer } from './MovieTrailer/MovieTrailer'

import { useLocation } from 'react-router-dom'
import styles from './PopularMovie.module.scss'

export const PopularMovie: FC = () => {
   const { state } = useLocation()

   return (
      <>
         <MovieTrailer backdropPosterPath={state.backdrop_path} />
         <div className={styles.popular__movie_wrapper}>
            <div className={styles.popular__movie_sidebar}>
               <MoviePoster posterPath={state.poster_path} />
               <MovieInfo movieInfo={state} />
            </div>
            <MovieMain movieInfo={state} />
         </div>
      </>
   )
}
