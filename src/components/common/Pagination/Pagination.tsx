import { FC } from 'react'

import { usePagination } from '../../../hooks/usePagination'
import { useGetAllPopularMoviesQuery } from '../../../services/api'
import { IMovies } from '../../../services/types/movies.in'

interface IPagination {
   data: IMovies
}

export const Pagination: FC<IPagination> = ({ data }) => {
   const { pageNumber, filledArrayWithPageNumbers, activePage, onPrevPage, onNextPage } =
      usePagination({
         data,
         itemsPerPage: 10,
      })

   useGetAllPopularMoviesQuery(activePage)

   // useEffect(() => {
   //    console.log('filledArrayWithPageNumbers ------ ', filledArrayWithPageNumbers)
   //    console.log('pageNumber ------ ', pageNumber)
   // }, [filledArrayWithPageNumbers, pageNumber])
   return (
      <div>
         Hello
         {activePage}
         {activePage === 1 ? (
            <button disabled>Prev page</button>
         ) : (
            <button onClick={() => onPrevPage()}>Prev page</button>
         )}
         {filledArrayWithPageNumbers.map((pageNumber) => (
            <div key={pageNumber}>
               <button>
                  {pageNumber} {activePage === pageNumber ? 'Active' : ''}
               </button>
            </div>
         ))}
         <button onClick={() => onNextPage()}>Next page</button>
      </div>
   )
}
