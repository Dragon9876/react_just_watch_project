import { FC } from 'react'

import { AdditionalFilters } from './AditionalFilters/AdditionalFilters'
import { MainFilters } from './MainFilters/MainFilters'

import styles from './PopularFilters.module.scss'

interface IPopularFilters {}

export const PopularFilters: FC<IPopularFilters> = () => {
   return (
      <div className={styles.popular__filters_wrapper}>
         <MainFilters />
         <AdditionalFilters />
      </div>
   )
}
