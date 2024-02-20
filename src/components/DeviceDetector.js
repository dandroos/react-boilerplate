import React, { useEffect } from "react"
import { useTheme } from "@mui/material/styles"
import { useDispatch } from "react-redux"
import { setDeviceType, setWindowOrientation } from "../redux/actions"

const WindowPropertiesListener = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  useEffect(() => {
    const handleResize = (size) => {
      let deviceType
      const breakpoints = Object.assign({}, theme.breakpoints.values)

      const { innerWidth, innerHeight } = window
      const ratio = innerWidth / innerHeight

      switch (true) {
        case innerWidth < breakpoints.sm:
          deviceType = 0 // mobile
          break
        case innerWidth < breakpoints.md:
          deviceType = 1 // tablet
          break
        case innerWidth < breakpoints.lg:
          deviceType = 2 // small laptop
          break
        case innerWidth < breakpoints.xl:
          deviceType = 3 // laptop/desktop
          break
        default:
          deviceType = 4 // large desktop
      }

      dispatch(setDeviceType(deviceType))

      let windowOrientation

      switch (true) {
        case ratio === 1:
          windowOrientation = 1 // square
          break
        case ratio > 1:
          windowOrientation = 0 // horizontal
          break
        default:
          windowOrientation = 2 // vertical
      }

      dispatch(setWindowOrientation(windowOrientation))
    }

    // On initial render
    handleResize()

    // Add resize event listener
    window.addEventListener("resize", handleResize)

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [dispatch, theme.breakpoints])

  return null // This component doesn't render anything
}

export default WindowPropertiesListener
