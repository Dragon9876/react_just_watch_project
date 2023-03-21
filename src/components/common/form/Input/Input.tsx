import { ChangeEvent, forwardRef } from 'react'
import styles from './Input.module.scss'

interface IInput {
   type?: string
   name?: string
   value?: string
   placeholder?: string
   onInput: (e: ChangeEvent<HTMLInputElement>) => void
   onBlur?: () => void
   onFocus?: () => void
}

export type Ref = HTMLInputElement

export const Input = forwardRef<Ref, IInput>(
   ({ placeholder, name, type, value, onInput, onBlur, onFocus }, ref) => {
      return (
         <input
            ref={ref}
            className={styles.input}
            type='text'
            onChange={(event) => onInput(event)}
            name={name}
            value={value}
            placeholder={placeholder}
            onFocus={() => onFocus && onFocus()}
            onBlur={() => onBlur && onBlur()}
         />
      )
   },
)

Input.displayName = 'Input'
