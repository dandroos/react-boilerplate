// DeviceTypeDetector.js

import React, { useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { connect, useDispatch } from 'react-redux'
import { setDeviceType } from '../redux/actions'

const DeviceTypeDetector = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  useEffect(() => {
    const handleResize = (size) => {
      let deviceType
      const breakpoints = Object.assign({}, theme.breakpoints.values)
      const screenWidth = window.innerWidth
      switch (true) {
        case screenWidth < breakpoints.sm:
          deviceType = 0 // mobile
          break
        case screenWidth < breakpoints.md:
          deviceType = 1 // tablet
          break
        case screenWidth < breakpoints.lg:
          deviceType = 2 // laptop
          break
        default:
          deviceType = 3 // desktop
      }

      dispatch(setDeviceType(deviceType))
    }

    // On initial render
    handleResize()

    // Add resize event listener
    window.addEventListener('resize', handleResize)

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch, theme.breakpoints])

  return null // This component doesn't render anything
}

export default DeviceTypeDetector
