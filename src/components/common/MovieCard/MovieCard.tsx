import { FC, memo } from 'react'
import { MOVIES_API_IMAGES_PATH } from '../../../config'

interface IAppMovieCard {
   imageMoviePath: string | null
}

export const MovieCard: FC<IAppMovieCard> = memo(({ imageMoviePath }) => {
   return (
      <div>
         {imageMoviePath ? (
            <div>
               <img
                  style={{ width: '100%' }}
                  src={`${MOVIES_API_IMAGES_PATH}${imageMoviePath}`}
                  alt=''
               />
            </div>
         ) : null}
      </div>
   )
})

MovieCard.displayName = 'MovieCard'
