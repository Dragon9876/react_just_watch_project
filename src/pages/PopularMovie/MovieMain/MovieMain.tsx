import { FC } from 'react'
import { Typography } from '../../../components'

import { MovieTrailers } from './MovieTrailers/MovieTrailers'
import { SimilarMovies } from './SimiralMovies/SimilarMovies'

import { IMovieDetailsResult, IMovieResult } from '../../../services/types/movies.in'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { MOVIES_API_KEY } from '../../../config'
import styles from './MovieMain.module.scss'

interface IMovieMain {
   movieInfo: IMovieResult
}

export const MovieMain: FC<IMovieMain> = ({ movieInfo }) => {
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

   console.log('movieDetails ----- ', movieDetails)
   return (
      <div className={styles.movie__main}>
         <div className={styles.movie__main_header}>
            <Typography as='h2' className={styles.movie__main_name}>
               {movieInfo.original_title}
            </Typography>
            <Typography as='span' className={styles.movie__main_year}>
               ({new Date(movieInfo.release_date).getFullYear()})
            </Typography>
            <Typography as='span' className={styles.movie__main_share}>
               <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='share-alt'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
               >
                  <path
                     fill='currentColor'
                     d='M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z'
                     className=''
                  ></path>
               </svg>
               <Typography as='span'>Share</Typography>
            </Typography>
         </div>

         <div className={styles.movie__main_description}>
            <Typography as='h3' className={styles.movie__main_title}>
               Synopsis
            </Typography>
            <Typography as='p' className={styles.movie__main_text}>
               {movieInfo.overview}
               {/* A young couple travels to a remote island to eat at an exclusive restaurant where the */}
               {/* chef has prepared a lavish menu, with some shocking surprises. */}
            </Typography>

            <Typography as='h3' className={styles.movie__main_title}>
               {movieInfo.title} - Watch Now: Stream,Buy or Rent
            </Typography>

            <Typography as='p' className={styles.movie__main_text}>
               Currently you are able to watch {movieInfo.title} streaming on Disney Plus or buy it
               as download on Amazon Video, Google Play Movies, YouTube, Apple TV, Microsoft Store,
               Telstra TV, Fetch TV.
            </Typography>
         </div>

         {/* <div className={styles.movie__main_cast}></div> */}

         <MovieTrailers movieID={movieInfo.id} />
         <SimilarMovies movieID={movieInfo.id} movieTitle={movieInfo.title} />
      </div>
   )
}
