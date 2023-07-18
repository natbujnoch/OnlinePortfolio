import React from 'react'
import '../css/WaveEffect.css'
import { useTheme } from 'next-themes'

const WaveEffect = () => {
  const { resolvedTheme } = useTheme()
  return (
    <div><div className="wave wave1" style={{filter: resolvedTheme === 'dark' ? 'invert(8%) sepia(100%) saturate(7453%) hue-rotate(248deg) brightness(98%) contrast(144%)' : 'invert(0%)'}}/>
    <div className="wave wave2" style={{filter: resolvedTheme === 'dark' ? 'invert(8%) sepia(100%) saturate(7453%) hue-rotate(248deg) brightness(98%) contrast(144%)' : 'invert(0%)'}}/>
    <div className="wave wave3" style={{filter: resolvedTheme === 'dark' ? 'invert(8%) sepia(100%) saturate(7453%) hue-rotate(248deg) brightness(98%) contrast(144%)' : 'invert(0%)'}}/>
    <div className="wave wave4" style={{filter: resolvedTheme === 'dark' ? 'invert(8%) sepia(100%) saturate(7453%) hue-rotate(248deg) brightness(98%) contrast(144%)' : 'invert(0%)'}}/></div>
  )
}

export default WaveEffect