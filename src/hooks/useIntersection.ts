import { useEffect, useState } from 'react'

export const useIntersection = () => {
   const [hasIntersected, setHasIntersected] = useState(() => false)
   const [targetRef, setTargetRef] = useState<Element | null>(() => null)

   useEffect(() => {
      const observerCallback = (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setHasIntersected(true)
            } else {
               setHasIntersected(false)
            }
         })
      }

      const observer = new IntersectionObserver(observerCallback, {
         root: null,
         threshold: 0.6,
      })
      if (targetRef.current) {
         observer.observe(targetRef.current)
      }

      return () => {
         observer.disconnect()
      }
   }, [])

   return [hasIntersected, targetRef]
}
