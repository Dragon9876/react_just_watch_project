import { FC, memo } from 'react'
import { MOVIES_API_IMAGES_PATH } from '../../../config'

import styles from './MovieCard.module.scss'

interface IAppMovieCard {
   imageMoviePath: string | null
}

export const MovieCard: FC<IAppMovieCard> = memo(({ imageMoviePath }) => {
   return (
      <div className={styles.movie}>
         {imageMoviePath ? (
            <>
               <svg
                  className={styles.movie__icon}
                  data-v-2caca084=''
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='bookmark'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
               >
                  <path
                     data-v-2caca084=''
                     fill='currentColor'
                     d='M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z'
                     className=''
                  ></path>
               </svg>
               <img
                  loading='lazy'
                  style={{ width: '100%' }}
                  src={`${MOVIES_API_IMAGES_PATH}${imageMoviePath}`}
                  alt=''
                  className={styles.movie__image}
               />
            </>
         ) : null}
      </div>
   )
})

MovieCard.displayName = 'MovieCard'
