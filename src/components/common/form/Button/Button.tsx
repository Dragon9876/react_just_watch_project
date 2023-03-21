import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
}

export const Button: FC<IButton> = ({ children, ...restProps }) => {
   return <button {...restProps}>{children}</button>
}
