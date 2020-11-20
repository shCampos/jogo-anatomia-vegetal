import React from 'react'

export default function FormaCircular(props) {
  const { color, radius } = props

  const circulo = {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    background: `radial-gradient(ellipse at center, transparent ${radius}%, ${color} 0%)`,
    "&:hover": {
      background: `radial-gradient(ellipse at center, transparent ${radius}%, lightGray 0%)`
    }
  }

  return (
    <div style={circulo}></div>
  )
}