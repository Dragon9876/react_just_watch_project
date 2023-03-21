import { FC, ReactNode } from 'react'
import styles from './Grid.module.scss'

interface IAppGrid {
   children: ReactNode
}

export const Grid: FC<IAppGrid> = ({ children }) => {
   return <div className={styles.grid}>{children}</div>
}
