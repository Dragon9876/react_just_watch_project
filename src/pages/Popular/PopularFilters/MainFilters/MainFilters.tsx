import { useState } from 'react'
import styles from './MainFilters.module.scss'

interface IMainFiltersState {
   isApplied: boolean
   value: string
   label: string
}

export const MainFilters = () => {
   const [mainFilters, setMainFilters] = useState<IMainFiltersState[]>([
      { isApplied: false, value: 'all', label: 'All' },
      { isApplied: false, value: 'movies', label: 'Movies' },
      { isApplied: false, value: 'tv-shows', label: 'TV Shows' },
   ])

   const onMainFiltersChange = () => {}

   return (
      <div className={styles.main__filters_wrapper}>
         {mainFilters.map((mainFilter) => (
            <span className={styles.main__filters_button} onClick={() => onMainFiltersChange()}>
               {mainFilter.label}
            </span>
         ))}
      </div>
   )
}
