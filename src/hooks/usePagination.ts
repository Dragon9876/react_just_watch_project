import { useCallback, useMemo, useState } from 'react'
import { IMovies } from '../services/types/movies.in'

interface IPagination {
   data: IMovies
   itemsPerPage: number
}

export const usePagination = ({ data, itemsPerPage }: IPagination) => {
   const [activePage, setActivePage] = useState(() => 1)
   const pageNumber = useMemo(
      () => Math.round(50 / itemsPerPage),
      [data.results.length, itemsPerPage],
   )
   const filledArrayWithPageNumbers = useMemo(
      () => Array.from({ length: pageNumber }, (_, i) => i + 1),
      [pageNumber],
   )

   const onNextPage = useCallback(() => {
      setActivePage((prevActivePage) => prevActivePage + 1)
   }, [])

   const onPrevPage = useCallback(() => {
      setActivePage((prevActivePage) => prevActivePage - 1)
   }, [])

   const onPage = useCallback(() => {}, [])

   return {
      pageNumber,
      filledArrayWithPageNumbers,
      activePage,
      setActivePage,
      onNextPage,
      onPrevPage,
      onPage,
   }
}
