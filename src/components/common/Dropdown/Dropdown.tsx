import { motion } from 'framer-motion'
import { CSSProperties, forwardRef, ReactNode } from 'react'

interface IDropdown {
   children: ReactNode
   isExpended: boolean
   style?: CSSProperties
   className?: string
}

export type Ref = HTMLDivElement

export const Dropdown = forwardRef<Ref, IDropdown>(
   ({ children, isExpended, style, className }, ref) => {
      return (
         <motion.div
            initial='closed'
            ref={ref}
            style={style}
            className={className}
            animate={isExpended ? 'opened' : 'closed'}
            variants={{
               opened: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                     delayChildren: 0.3,
                     staggerChildren: 0.2,
                  },
               },
               closed: {
                  opacity: 0.8,
                  scale: 0,
               },
            }}
         >
            {children}
         </motion.div>
      )
   },
)
