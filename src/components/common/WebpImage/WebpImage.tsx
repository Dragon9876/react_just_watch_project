import { FC } from 'react'

interface IAppWebpImage {
   srcSet: string
   src: string
   alt: string
   size: {
      width: string
      height: string
   }
}

export const WebpImage: FC<IAppWebpImage> = ({ srcSet, src, alt, size }) => {
   return (
      <picture>
         <source type='image/webp' srcSet={srcSet} />
         <img src={src} alt={alt} width={size.width} height={size.height} />
      </picture>
   )
}
