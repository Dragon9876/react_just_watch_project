import { RxCross2, TiTick } from 'react-icons/all'

import styles from './Filters.module.scss'

export const RealizeDateFilter = () => {
   return (
      <>
         <div className={styles.filter__header}>
            Release year
            <span style={{ display: 'flex', alignItems: 'center' }}>
               <RxCross2 />
               Reset
            </span>
         </div>
         <div>Slider</div>
         <div className={styles.filter__tab}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
               <TiTick />
               This Year
            </span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
               <TiTick />
               Last Year
            </span>
         </div>
      </>
   )
}
