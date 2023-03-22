import { FC } from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { Typography, VideoIframe } from '../../../../components'

import { MOVIES_API_KEY } from '../../../../config'

import styles from './MovieTrailers.module.scss'

interface IMovieTrailers {
   movieID: number
}

export const MovieTrailers: FC<IMovieTrailers> = ({ movieID }) => {
   const { data: movieTrailers } = useQuery({
      queryKey: ['movie_trailers', movieID],
      enabled: !!movieID,
      queryFn: ({ queryKey }) => {
         return axios
            .get(`https://api.themoviedb.org/3/movie/${queryKey[1]}/videos`, {
               params: {
                  api_key: MOVIES_API_KEY,
                  page: 1,
               },
            })
            .then((response) => response.data)
      },
   })

   return (
      <>
         <Typography className={styles.movie__trailers_title}>
            Videos: Trailers, Teasers, Featurettes
         </Typography>
         <div className={styles.movie__trailers_wrapper}>
            {movieTrailers
               ? movieTrailers.results.map((movieTrailer) => (
                    <VideoIframe
                       key={movieTrailer.id}
                       videoKey={movieTrailer.key}
                       frameBorder='0'
                       width='100%'
                       height='100%'
                       allowFullScreen={true}
                    />
                 ))
               : null}
         </div>
      </>
   )
}
