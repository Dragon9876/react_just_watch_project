import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { MOVIES_API_KEY } from '../../../../../config'
import { useFiltersStore } from '../../../../../store'

interface IGenresFilter {
   onGenreChange: (genreId: string) => void
}

export const GenresFilter: FC<IGenresFilter> = ({ onGenreChange }) => {
   const setGenre = useFiltersStore((state) => state.setGenre)
   const { data, isLoading } = useQuery({
      queryKey: ['genres'],
      queryFn: () => {
         return axios
            .get('https://api.themoviedb.org/3/genre/movie/list', {
               params: { api_key: MOVIES_API_KEY },
            })
            .then((response) => response.data)
      },
   })

   return (
      <div>
         GenresFilter
         {!isLoading
            ? data?.genres.map((genre) => (
                 <div
                    style={{ cursor: 'pointer' }}
                    key={genre.id}
                    onClick={() => setGenre(genre.id)}
                 >
                    {genre.name}
                 </div>
              ))
            : 'Loading........'}
      </div>
   )
}
