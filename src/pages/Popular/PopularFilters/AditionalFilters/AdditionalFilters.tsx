import { useCallback, useState } from 'react'
import { FaFilter } from 'react-icons/all'
import { AdditionalFilterItem } from './AdditionalFilterItem'
import styles from './AdditionalFilters.module.scss'
import { AgeRatingFilter } from './Filters/AgeRatingFilter'
import { GenresFilter } from './Filters/GenresFilter'
import { PriceFilter } from './Filters/PriceFilter'
import { RatingFilter } from './Filters/RatingFilter'
import { RealizeDateFilter } from './Filters/RealizeDateFilter'

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
   const [additionalFilters, setAdditionalFilters] = useState<IAdditionalFiltersState[]>(() => [
      {
         isExpanded: false,
         isApplied: false,
         value: {
            thisYear: false,
            lastYear: false,
         },
         label: 'Realize Year',
         filterComponent: <RealizeDateFilter />,
      },
      {
         isExpanded: false,
         isApplied: false,
         value: '',
         label: 'Genres',
         filterComponent: <GenresFilter />,
      },
      {
         isExpanded: false,
         isApplied: false,
         value: '',
         label: 'Rating',
         filterComponent: <RatingFilter />,
      },
      {
         isExpanded: false,
         isApplied: false,
         value: '',
         label: 'Price',
         filterComponent: <PriceFilter />,
      },
      {
         isExpanded: false,
         isApplied: false,
         value: '',
         label: 'Age rating',
         filterComponent: <AgeRatingFilter />,
      },
   ])

   // const filteredMoviesSelector = useMemo(() => {
   //    return createSelector(
   //       (res) => res.data,
   //       (res, userId) => userId,
   //       (data, userId) => [],
   //    )
   // }, [])
   //
   // useGetAllPopularMoviesQuery('', {
   //    selectFromResult: (result) => ({
   //       ...result,
   //       filteredPopularMovies: [],
   //    }),
   // })

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
