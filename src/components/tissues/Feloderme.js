import React, { useState } from 'react'

import FormaCircular from './FormaCircular'

export default function Feloderme(props) {
  const { diameter } = props

  return (
    <div style={{width: diameter, height: diameter}} >
      <FormaCircular color='blue' radius='69'/>
    </div>
  )
}