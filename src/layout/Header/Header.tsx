import { FC } from 'react'
import { useAuth } from '../../providers/AuthProvider/AuthProvider'

import { MoviesSearch } from './MoviesSearch/MoviesSearch'

import { Button, WebpImage } from '../../components'
import styles from './Header.module.scss'
import { Nav } from './Nav/Nav'

export const Header: FC = () => {
   const { logout } = useAuth()

   const handleLogOut = async () => {
      await logout()
   }

   const onInputBlur = () => {}

   return (
      <div className={styles.header}>
         <div className={styles.header__wrapper}>
            <WebpImage
               srcSet='https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp'
               src='https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.png'
               alt='logo'
               size={{
                  width: '131px',
                  height: '20px',
               }}
            />

            <Nav />
            <MoviesSearch />
            <Button onClick={() => handleLogOut()}>Log out</Button>
         </div>
      </div>
   )
}
