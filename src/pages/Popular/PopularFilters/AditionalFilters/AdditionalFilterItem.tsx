import { FC, memo } from 'react'

import { RiArrowDownSLine } from 'react-icons/all'
import { Dropdown } from '../../../../components'

import { IAdditionalFiltersState } from './AdditionalFilters'

import styles from './AdditionalFilters.module.scss'

interface IAdditionalFilterItem {
   additionalFilter: IAdditionalFiltersState
   handleAdditionalFilters: (filterLabel: string) => void
}

export const AdditionalFilterItem: FC<IAdditionalFilterItem> = memo(
   ({ handleAdditionalFilters, additionalFilter }) => {
      return (
         <div className={styles.additional__filter_item}>
            <div
               className={styles.additional__filter_button}
               onClick={() => handleAdditionalFilters(additionalFilter.label)}
            >
               <span>{additionalFilter.label}</span>
               <RiArrowDownSLine
                  size='1.6em'
                  style={{
                     transform: additionalFilter.isExpanded ? 'rotate(180deg)' : '',
                  }}
               />
            </div>
            {additionalFilter.isExpanded ? (
               <Dropdown
                  style={{
                     position: 'absolute',
                     top: '50px',
                     zIndex: 1000,
                  }}
                  isExpended={additionalFilter.isExpanded}
               >
                  <div className={styles.filter__wrapper}>{additionalFilter.filterComponent}</div>
               </Dropdown>
            ) : (
               ''
            )}
         </div>
      )
   },
)
