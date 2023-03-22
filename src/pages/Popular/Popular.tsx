import { FC, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'

import { PopularDescription } from './PopularDescription/PopularDescription'
import { PopularFilters } from './PopularFilters/PopularFillters'
import { PopularSort } from './PopularSort/PopularSort'

import { useFiltersStore } from '../../store'

import { Grid, MovieCard } from '../../components'

import { MOVIES_API_KEY } from '../../config'
import { IMovies } from '../../services/types/movies.in'

export const Popular: FC = () => {
   const { pathname } = useLocation()

   const store = useFiltersStore((state) => state)
   const genreId = useFiltersStore((state) => state.filters.genreId)
   const sortBy = useFiltersStore((state) => state.sort_by)

   useEffect(() => {
      console.log('store ======= ', store)
   }, [store])

   const { data, isError, isLoading, fetchNextPage } = useInfiniteQuery({
      queryKey: ['movie_popular', genreId, sortBy],
      enabled: !!sortBy,
      queryFn: ({ pageParam }): Promise<IMovies> => {
         return axios
            .get('https://api.themoviedb.org/3/discover/movie', {
               params: {
                  api_key: MOVIES_API_KEY,
                  language: 'en-US',
                  page: pageParam || 1,
                  with_genres: genreId,
                  sort_by: sortBy,
               },
            })
            .then((response) => response.data)
      },
      getNextPageParam: (lastPage) => lastPage.page + 1,
   })

   const { ref, inView } = useInView({ threshold: 0.3 })

   useEffect(() => {
      if (inView && pathname.includes('popular')) {
         fetchNextPage()
      }
   }, [inView, pathname])

   if (isError) {
      return <div>Error while loading popular movies</div>
   }

   return (
      <>
         <PopularDescription />
         <PopularFilters />
         <PopularSort data={data} sortBy={sortBy} />

         <div>
            {data?.pages
               ? data?.pages.map((page, index) => (
                    <div key={index} ref={ref}>
                       <Grid>
                          {page.results.map((popularMovie) => (
                             <Link
                                to={`movie/${popularMovie.original_title}`}
                                key={index}
                                state={popularMovie}
                             >
                                <MovieCard imageMoviePath={popularMovie.poster_path} />
                             </Link>
                          ))}
                       </Grid>
                    </div>
                 ))
               : null}
         </div>
      </>
   )
}
