import { useState } from 'react'

export const useToggle = () => {
   const [isToggled, setIsToggled] = useState(() => false)

   return {
      isToggled,
      setIsToggled,
   }
}
