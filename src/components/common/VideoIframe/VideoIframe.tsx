import { FC, IframeHTMLAttributes } from 'react'

interface IVideoIframe extends IframeHTMLAttributes<never> {
   videoKey: string
}

export const VideoIframe: FC<IVideoIframe> = ({ videoKey, ...restProps }) => {
   return <iframe src={`https://www.youtube.com/embed/${videoKey}`} {...restProps}></iframe>
}
