import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import Epiderme from './Epiderme'
import Feloderme from './Feloderme'
import FormaCircular from './FormaCircular'

export default function Tissues(props) {
  const { setCurrentTissue, disivionFlags } = props

  const handleEpidermeClick = () => {
    setCurrentTissue({name: 'epiderme'})
  }

  const handleFelodermeClick = () => {
    setCurrentTissue({name: 'feloderme'})
  }

  return (
    <Grid container justify="center" alignItems="center">
        <div
          style={{position: 'absolute', display: !disivionFlags.feloderme&&'none'}}
          onClick={handleFelodermeClick}>
            <Feloderme diameter='520px'/>
        </div>
        
        <div style={{position: 'relative', zIndex: 1}} onClick={handleEpidermeClick}>
          <Epiderme />
        </div>
        
    </Grid>
  )
}