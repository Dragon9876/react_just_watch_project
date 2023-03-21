import { FC } from 'react'

import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

type IVideoPlayer = {}

export const VideoPlayer: FC<IVideoPlayer> = () => {
   return (
      <Video
         autoPlay
         loop
         muted
         width='400'
         height='450'
         controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
         poster='http://sourceposter.jpg'
         onCanPlayThrough={() => {
            // Do stuff
         }}
      >
         <source
            src='blob:https://geo.dailymotion.com/7267b832-f461-47cc-94c4-5dc07efd169a'
            type='video/webm'
         />
      </Video>
   )
}
