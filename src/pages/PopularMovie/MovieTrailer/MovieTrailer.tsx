import { FC } from 'react'

import { VideoPlayer } from '../../../components/common/VideoPlayer/VideoPlayer'

import { MOVIES_API_IMAGES_PATH } from '../../../config'
import styles from './MovieTrail.module.scss'

interface IMovieTrailer {
   backdropPosterPath: string | null
}

export const MovieTrailer: FC<IMovieTrailer> = ({ backdropPosterPath }) => {
   return (
      <div className={styles.movie__trailer}>
         <VideoPlayer />
         <img
            src={`${MOVIES_API_IMAGES_PATH}${backdropPosterPath}`}
            className={styles.movie__trailer_image}
         />
      </div>
   )
}
