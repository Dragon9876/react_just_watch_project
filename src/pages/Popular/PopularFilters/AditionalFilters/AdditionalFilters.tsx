import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCallback, useState } from 'react'
import { FaFilter } from 'react-icons/all'
import { MOVIES_API_KEY } from '../../../../config'
import { IMovies } from '../../../../services/types/movies.in'
import { AdditionalFilterItem } from './AdditionalFilterItem'
import styles from './AdditionalFilters.module.scss'
import { GenresFilter } from './Filters/GenresFilter'

interface FilterRealizeYearValue {
   thisYear: boolean
   lastYear: boolean
}

interface FilterAgeRatingValue {
   from: string
   to: string
}

interface FilterIMDBRatingValue {
   from: string
   to: string
}

export interface IAdditionalFiltersState {
   isExpanded: boolean
   isApplied: boolean
   value: FilterRealizeYearValue | FilterAgeRatingValue | FilterIMDBRatingValue | string
   label: string
   filterComponent: JSX.Element
}

export const AdditionalFilters = () => {
   const [selectedGenre, setSelectedGenre] = useState('')
   const [additionalFilters, setAdditionalFilters] = useState<IAdditionalFiltersState[]>(() => [
      // {
      //    isExpanded: false,
      //    isApplied: false,
      //    value: {
      //       thisYear: false,
      //       lastYear: false,
      //    },
      //    label: 'Realize Year',
      //    filterComponent: <RealizeDateFilter />,
      // },
      {
         isExpanded: false,
         isApplied: false,
         value: '',
         label: 'Genres',
         filterComponent: (
            <GenresFilter onGenreChange={(genreValue) => setSelectedGenre(genreValue)} />
         ),
      },
      // {
      //    isExpanded: false,
      //    isApplied: false,
      //    value: '',
      //    label: 'Rating',
      //    filterComponent: <RatingFilter />,
      // },
      // {
      //    isExpanded: false,
      //    isApplied: false,
      //    value: '',
      //    label: 'Price',
      //    filterComponent: <PriceFilter />,
      // },
      // {
      //    isExpanded: false,
      //    isApplied: false,
      //    value: '',
      //    label: 'Age rating',
      //    filterComponent: <AgeRatingFilter />,
      // },
   ])

   useInfiniteQuery({
      queryKey: ['movie_popular_filters', selectedGenre],
      queryFn: ({ pageParam, queryKey }): Promise<IMovies> => {
         console.log('queryKey ----------- ', queryKey)
         return axios
            .get('https://api.themoviedb.org/3/discover/movie', {
               params: {
                  api_key: MOVIES_API_KEY,
                  language: 'en-US',
                  page: pageParam,
                  with_genres: queryKey[1],
               },
            })
            .then((response) => response.data)
      },
      getNextPageParam: (lastPage) => lastPage.page + 1,
   })

   const toggleAdditionalFilters = useCallback((filterLabel: string) => {
      setAdditionalFilters((prevAdditionalFilters) =>
         prevAdditionalFilters.map((prevAdditionalFilter) => {
            return filterLabel === prevAdditionalFilter.label
               ? {
                    ...prevAdditionalFilter,
                    isExpanded: !prevAdditionalFilter.isExpanded,
                 }
               : {
                    ...prevAdditionalFilter,
                    isExpanded: false,
                 }
         }),
      )
   }, [])

   return (
      <div className={styles.additional_filter_wrapper}>
         <span className={styles.additional__filters_title}>
            <FaFilter color='#4c5a67' size='0.9em' />
            Filters
         </span>

         {additionalFilters.map((additionalFilter) => (
            <AdditionalFilterItem
               key={additionalFilter.label}
               additionalFilter={additionalFilter}
               handleAdditionalFilters={(filterLabel) => toggleAdditionalFilters(filterLabel)}
            />
         ))}
      </div>
   )
}
