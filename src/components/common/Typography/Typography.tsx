import { ComponentProps, ElementType, ReactNode } from 'react'

interface IOwnTypography<E extends ElementType = ElementType> {
   children: ReactNode
   as?: E
}

const defaultElement = 'p'

type ITypography<E extends ElementType> = IOwnTypography<E> &
   Omit<ComponentProps<E>, keyof IOwnTypography>

export const Typography = <E extends ElementType = typeof defaultElement>({
   children,
   as,
   ...restProps
}: ITypography<E>) => {
   const TagName = as || defaultElement
   return <TagName {...restProps}>{children}</TagName>
}
