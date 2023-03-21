import { FC } from 'react'

import { Typography } from '../../../components'

import styles from './MovieInfo.module.scss'

export const MovieInfo: FC = () => {
   return (
      <div className={styles.movie__info}>
         <div className={styles.movie__info_item}>
            <Typography as='h3' className={styles.movie__info_title}>
               Rating
            </Typography>
            <Typography as='span' className={styles.movie__info_text}>
               <img
                  src='https://www.justwatch.com/appassets/img/jw-icon.png'
                  alt='JustWatch Rating'
               />
               <span>89%</span>

               <img src='https://www.justwatch.com/appassets/img/imdb-logo.png' alt='IMDB' />
               <span>8.0 (349k)</span>
            </Typography>
         </div>
         <div className={styles.movie__info_item}>
            <Typography as='h3' className={styles.movie__info_title}>
               Genres
            </Typography>
            <Typography as='span' className={styles.movie__info_text}>
               Science-Fiction, Action & Adventure, Comedy, Fantasy
            </Typography>
         </div>
         <div className={styles.movie__info_item}>
            <Typography as='h3' className={styles.movie__info_title}>
               Runtime
            </Typography>
            <Typography as='span' className={styles.movie__info_text}>
               2h 20min
            </Typography>
         </div>
         <div className={styles.movie__info_item}>
            <Typography as='h3' className={styles.movie__info_title}>
               Director
            </Typography>
            <div className={styles.movie__info_text}>
               <Typography className={styles.movie__info_link} as='a' href=''>
                  Daniel Scheinert
               </Typography>

               <Typography as='span'>,</Typography>

               <Typography className={styles.movie__info_link} as='a' href=''>
                  Daniel Scheinert
               </Typography>
            </div>
         </div>
      </div>
   )
}
