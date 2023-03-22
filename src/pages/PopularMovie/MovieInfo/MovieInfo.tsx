import { FC } from 'react'

import { Typography } from '../../../components'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { MOVIES_API_KEY } from '../../../config'
import { IMovieDetailsResult, IMovieResult } from '../../../services/types/movies.in'
import styles from './MovieInfo.module.scss'

interface IMovieInfo {
   movieInfo: IMovieResult
}

export const MovieInfo: FC<IMovieInfo> = ({ movieInfo }) => {
   const { data: movieDetails } = useQuery({
      queryKey: ['movie_details', movieInfo.id],
      enabled: !!movieInfo.id,
      queryFn: ({ queryKey }): Promise<IMovieDetailsResult> => {
         return axios
            .get(`https://api.themoviedb.org/3/movie/${queryKey[1]}`, {
               params: {
                  api_key: MOVIES_API_KEY,
               },
            })
            .then((response) => response.data)
      },
   })
   return (
      <div className={styles.movie__info}>
         <div className={styles.movie__info_item}>
            <Typography as='h3' className={styles.movie__info_title}>
               Rating
            </Typography>
            <Typography as='span' className={styles.movie__info_text}>
               <img
                  src='https://www.justwatch.com/appassets/img/jw-icon.png'
                  alt='JustWatch Rating'
                  style={{ width: '30px' }}
               />
               <span>{movieDetails?.imdb_id}%</span>

               <img
                  src='https://www.justwatch.com/appassets/img/imdb-logo.png'
                  alt='IMDB'
                  style={{ width: '30px' }}
               />
               <span>8.0 (349k)</span>
            </Typography>
         </div>
         <div className={styles.movie__info_item}>
            <Typography as='h3' className={styles.movie__info_title}>
               Genres
            </Typography>
            <Typography as='span' className={styles.movie__info_text}>
               {movieDetails?.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
               ))}
            </Typography>
         </div>
         <div className={styles.movie__info_item}>
            <Typography as='h3' className={styles.movie__info_title}>
               Runtime
            </Typography>
            <Typography as='span' className={styles.movie__info_text}>
               {movieDetails?.runtime}
            </Typography>
         </div>
         <div className={styles.movie__info_item}>
            <Typography as='h3' className={styles.movie__info_title}>
               Director
            </Typography>
            <div className={styles.movie__info_text}>
               <Typography className={styles.movie__info_link} as='a' href=''>
                  Daniel Scheinert
               </Typography>

               <Typography as='span'>,</Typography>

               <Typography className={styles.movie__info_link} as='a' href=''>
                  Daniel Scheinert
               </Typography>
            </div>
         </div>
      </div>
   )
}
