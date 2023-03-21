import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'

export const Nav = () => {
   return (
      <nav>
         <ul className={styles.header__navbar}>
            <li>
               <NavLink className={styles.header__link} to='/home'>
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink className={styles.header__link} to='/new'>
                  New
               </NavLink>
            </li>
            <li>
               <NavLink className={styles.header__link} to='/popular'>
                  Popular
               </NavLink>
            </li>
            <li>
               <NavLink className={styles.header__link} to='/watchlist'>
                  Watchlist
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}
