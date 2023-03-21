import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, SvgSelect, Typography } from '../../components'

import { svgNames } from '../../components/common/SvgSelect/SvgSelect'
import { useAuth } from '../../providers/AuthProvider/AuthProvider'
import styles from './Root.module.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IRoot {}

export const Root: FC<IRoot> = () => {
   const { singInWithGoogle, singInWithFacebook, singInWithApple } = useAuth()

   const handleSingInWithGoogle = async () => {
      await singInWithGoogle({
         // options: {
         //    redirectTo: '/popular',
         // },
      })
   }

   return (
      <div className={styles.root}>
         <div className={styles.root__wrapper}>
            <Typography as='div' className={styles.root__header}>
               JustWatch Account
            </Typography>
            <div className={styles['root__sing-in']}>
               <Link to='/sing-in'>
                  <Typography className={styles['root__sing-in_circle']}>
                     <SvgSelect
                        className={styles['root__sing-in_profile']}
                        svgName={svgNames.profile}
                     />
                  </Typography>
                  <Typography className={styles['root__sing-in_title']}>Sing In</Typography>
                  <Typography as='span'>
                     <SvgSelect
                        className={styles['root__sing-in_arrow']}
                        svgName={svgNames.right_arrow}
                     />
                  </Typography>
               </Link>
            </div>

            <div className={styles['root__sing-up']}>
               <Link to='/sing-up'>
                  <Typography className={styles['root__sing-up_circle']}>
                     <SvgSelect
                        className={styles['root__sing-up_profile']}
                        svgName={svgNames.profile_plus}
                     />
                  </Typography>
                  <Typography className={styles['root__sing-up_create']}>
                     <Typography as='span'>Create an account</Typography>
                     <ul>
                        <li>Sync with your TV app</li>
                        <li>Your watchlist on all devices</li>
                     </ul>
                  </Typography>
                  <Button>Join JustWatch</Button>
               </Link>
            </div>

            <div>
               <Button onClick={() => handleSingInWithGoogle({})}>Google</Button>
               <Button onClick={() => singInWithFacebook({})}>Facebook</Button>
               <Button onClick={() => singInWithApple({})}>Apple</Button>
            </div>

            {/* <div>3</div> */}

            {/* <div> */}
            {/*    <SvgSelect className={styles.root__icon} svgName={svgNames.earth} /> */}
            {/* </div> */}
            {/* <div> */}
            {/*    <SvgSelect className={styles.root__icon} svgName={svgNames.language} /> */}
            {/* </div> */}
            {/* <div>6</div> */}
         </div>
      </div>
   )
}
