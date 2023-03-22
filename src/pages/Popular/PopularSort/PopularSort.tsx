import { InfiniteData } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/all'
import { Dropdown, Typography } from '../../../components'
import { IMovies } from '../../../services/types/movies.in'
import { useFiltersStore } from '../../../store'

import styles from './PopularSort.module.scss'

interface IPopularSort {
   data: InfiniteData<IMovies> | undefined
   sortBy: string
}

export const PopularSort: FC<IPopularSort> = ({ data, sortBy }) => {
   const [isDropdownExpended, setIsDropdownExpended] = useState(() => false)
   const setSortMethod = useFiltersStore((state) => state.setSortMethod)

   const toggleDropdown = () => {
      setIsDropdownExpended((prevIsDropdownExpended) => !prevIsDropdownExpended)
   }

   const sortTitle = (sortMethod) => {
      switch (sortMethod) {
         case 'popularity.desc':
            return 'Popularity Desc'
         case 'popularity.asc':
            return 'Popularity Asc'
         case 'release_date.asc':
            return 'Realize Date Asc'
         case 'release_date.desc':
            return 'Realize Date Desc'
         case 'revenue.desc':
            return 'Revenue Desc'
         case 'revenue.asc':
            return 'Revenue Asc'
         case 'original_title.asc':
            return 'Original Title Asc'
         case 'original_title.desc':
            return 'Original Title Asc'
      }
   }

   return (
      <div className={styles.sort}>
         <Typography as='span' className={styles.sort__title}>
            {data?.pages[0]?.total_results} titles
         </Typography>
         <Typography as='span' className={styles.sort__main}>
            sorted by {sortTitle(sortBy)}
            <Typography
               className={styles['root__main-arrow']}
               as='span'
               onClick={() => toggleDropdown()}
               style={{ cursor: 'pointer' }}
            >
               <RiArrowDownSLine
                  size='1.6em'
                  style={{
                     transform: isDropdownExpended ? 'rotate(180deg)' : '',
                  }}
               />
            </Typography>
            <Dropdown
               style={{ zIndex: 1000 }}
               className={styles['sort__main-dropdown']}
               isExpended={isDropdownExpended}
            >
               <ul>
                  <li
                     className={styles['sort__main-item']}
                     onClick={() => setSortMethod('popularity.desc')}
                  >
                     Popularity Desc
                  </li>
                  <li
                     className={styles['sort__main-item']}
                     onClick={() => setSortMethod('popularity.asc')}
                  >
                     Popularity Asc
                  </li>
                  <li
                     className={styles['sort__main-item']}
                     onClick={() => setSortMethod('release_date.asc')}
                  >
                     Realize Date Asc
                  </li>
                  <li
                     className={styles['sort__main-item']}
                     onClick={() => setSortMethod('release_date.desc')}
                  >
                     Realize Date Desc
                  </li>
                  <li
                     className={styles['sort__main-item']}
                     onClick={() => setSortMethod('revenue.desc')}
                  >
                     Revenue Desc
                  </li>
                  <li
                     className={styles['sort__main-item']}
                     onClick={() => setSortMethod('revenue.asc')}
                  >
                     Revenue Asc
                  </li>
                  <li
                     className={styles['sort__main-item']}
                     onClick={() => setSortMethod('original_title.asc')}
                  >
                     Original Title Asc
                  </li>
                  <li
                     className={styles['sort__main-item']}
                     onClick={() => setSortMethod('original_title.desc')}
                  >
                     Original Title Desc
                  </li>
               </ul>
            </Dropdown>
         </Typography>
      </div>
   )
}
