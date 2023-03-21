import { FC } from 'react'

import { Audio } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

import { Grid, MovieCard, Pagination } from '../../components'

import { PopularDescription } from './PopularDescription/PopularDescription'
import { PopularFilters } from './PopularFilters/PopularFillters'

import { useGetAllPopularMoviesQuery } from '../../services/api'

export const Popular: FC = () => {
   const {
      isLoading,
      isError,
      // data: popularMovies,
      data: filteredPopularMovies,
   } = useGetAllPopularMoviesQuery(2, {})

   if (isError) {
      return <div>Error while loading popular movies</div>
   }

   if (isLoading) {
      return <Audio height='80' width='80' color='green' ariaLabel='three-dots-loading' />
   }

   return (
      <>
         <PopularDescription />
         <PopularFilters />
         <Grid>
            {filteredPopularMovies
               ? filteredPopularMovies.results.map((popularMovie, index) => (
                    <Link
                       to={`movie/${popularMovie.original_title}`}
                       key={index}
                       state={popularMovie}
                    >
                       <MovieCard imageMoviePath={popularMovie.poster_path} />
                    </Link>
                 ))
               : null}
         </Grid>

         {filteredPopularMovies ? <Pagination data={filteredPopularMovies} /> : null}
      </>
   )
}
