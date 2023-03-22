import { Button } from '../../../../components'

import { FC } from 'react'
import styles from './PosterActions.module.scss'

interface IPosterActions {}

export const PosterActions: FC<IPosterActions> = ({}) => {
   return (
      <>
         <div className={styles.poster__actions}>
            <div className={styles.poster__actions_item}>
               <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='bookmark'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                  className={styles.poster__actions_icon}
               >
                  <path
                     fill='currentColor'
                     d='M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z'
                     className=''
                  ></path>
               </svg>
               Watchlist
            </div>
            <div className={styles.poster__actions_item}>
               <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='jw-check-icon'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className={styles.poster__actions_icon}
               >
                  <path
                     fill='currentColor'
                     d='m84.13438,223.22084l80.55344,101.52719l306.28647,-295.20374c22.42605,-21.20181 52.68433,6.49166 34.4073,31.18971l-305.30115,407.94665c-22.80379,25.82752 -50.9279,26.29884 -72.13266,-3.65322l-122.44958,-183.92576c-23.13121,-42.56132 49.00758,-93.28321 78.63618,-57.88082z'
                     className=''
                  ></path>
               </svg>
               Seen
            </div>
            <div className={styles.poster__actions_item}>
               <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='thumbs-up'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className={styles.poster__actions_icon}
               >
                  <path
                     fill='currentColor'
                     d='M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z'
                     className=''
                  ></path>
               </svg>
               Like
            </div>
            <div className={styles.poster__actions_item}>
               <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='thumbs-up'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className={styles.poster__actions_icon}
               >
                  <path
                     fill='currentColor'
                     d='M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z'
                     className=''
                  ></path>
               </svg>
               Dislike
            </div>
         </div>
         <Button>Sing in</Button>
      </>
   )
}
