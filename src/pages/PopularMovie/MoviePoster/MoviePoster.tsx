import { FC } from 'react'

import { MOVIES_API_IMAGES_PATH } from '../../../config'
import styles from './MoviePoster.module.scss'
import { PosterActions } from './PosterActions/PosterActions'

interface IMoviePoster {
   posterPath: string | null
}

export const MoviePoster: FC<IMoviePoster> = ({ posterPath }) => {
   return (
      <div className={styles.movie__poster}>
         <img
            src={`${MOVIES_API_IMAGES_PATH}${posterPath}`}
            className={styles.movie__poster_image}
         />
         <PosterActions />
      </div>
   )
}
