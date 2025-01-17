import { useState, useEffect } from 'react'

function useWindow() {
      const [windowSize, setWindowSize] = useState({
            width: window.innerWidth ?? 0,
            height: window.innerHeight ?? 0,
      })

      useEffect(() => {
            if (typeof window === 'undefined') {
                  return
            }
            const handleResize = () => {
                  setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                  })
            }

            window.addEventListener('resize', handleResize)

            return () => {
                  window.removeEventListener('resize', handleResize)
            }
      }, [])

      return { windowSize }
}

export default useWindow
