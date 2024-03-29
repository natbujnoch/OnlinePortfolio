import React from 'react'
import '../css/WaveEffect.css'
import { useTheme } from 'next-themes'

const WaveEffect = () => {
  const { resolvedTheme } = useTheme()
  return (
    <div><div className="wave wave1" style={{filter: resolvedTheme === 'dark' ? 'invert(8%) saturate(7453%) hue-rotate(248deg) brightness(98%) contrast(144%) opacity(100%)' : 'invert(0%)'}}/>
    <div className="wave wave2" style={{filter: resolvedTheme === 'dark' ? 'invert(8%) saturate(7453%) hue-rotate(248deg) brightness(98%) contrast(144%) opacity(50%)' : 'invert(0%)'}}/>
    <div className="wave wave3" style={{filter: resolvedTheme === 'dark' ? 'invert(8%) saturate(7453%) hue-rotate(248deg) brightness(98%) contrast(144%) opacity(20%)' : 'invert(0%)'}}/>
    <div className="wave wave4" style={{filter: resolvedTheme === 'dark' ? 'invert(8%) saturate(7453%) hue-rotate(248deg) brightness(98%) contrast(144%) opacity(70%)' : 'invert(0%)'}}/></div>
  )
}

export default WaveEffect