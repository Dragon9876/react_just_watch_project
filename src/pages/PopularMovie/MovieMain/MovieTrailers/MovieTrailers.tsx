import { FC } from 'react'

import { Typography, VideoIframe } from '../../../../components'

import { useGetAllMovieTrailersQuery } from '../../../../services/api'

import styles from './MovieTrailers.module.scss'

interface IMovieTrailers {
   movieID: number
}

export const MovieTrailers: FC<IMovieTrailers> = ({ movieID }) => {
   const { data: movieTrailers } = useGetAllMovieTrailersQuery(movieID, {
      skip: !movieID,
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
