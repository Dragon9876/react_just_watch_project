import { useEffect, useRef, useState } from 'react'
import { Dropdown, Input } from '../../../components'
import { useDebounce } from '../../../hooks/useDebounce'
import { useToggle } from '../../../hooks/useToggle'
import { useLazySearchMoviesQuery } from '../../../services/api'

import styles from './MoviesSearch.module.scss'

export const MoviesSearch = () => {
   const [fetch, data] = useLazySearchMoviesQuery()

   const [searchTerm, setSearchTerm] = useState('')

   const { setIsToggled, isToggled } = useToggle()
   const debouncedSearchTerm = useDebounce(searchTerm, 500)

   const searchInputRef = useRef(null)
   const dropdownRef = useRef(null)

   const onInputFocus = () => {
      setIsToggled((prevValue) => true)
   }

   useEffect(() => {
      fetch(debouncedSearchTerm)
   }, [debouncedSearchTerm])

   return (
      <div className={styles.movie__search_wrapper}>
         <Input
            ref={searchInputRef}
            // onBlur={() => onInputBlur()}
            onFocus={() => onInputFocus()}
            onInput={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for movies or TV shows'
         />
         <Dropdown
            ref={dropdownRef}
            isExpended={isToggled}
            className={styles.movie__search_dropdown}
         >
            <div style={{ backgroundColor: 'white', minHeight: '200px' }}>
               <span>Recent searches</span>
               Clear All
               {data?.data?.results.map((result) => (
                  <>
                     <div>{result.original_title}</div>
                     <div>{result.release_date}</div>
                  </>
               ))}
            </div>
         </Dropdown>
      </div>
   )
}
