import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  circulo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse at center, #fff 60%, blue 51.5%)',
    "&:hover": {
      background: "radial-gradient(ellipse at center, #fff 60%, lightBlue 51.5%)"
    }
  }
}))

export default function TecidoTeste() {
  const classes = useStyles()

  return (
    <div style={{width: '500px', height: '500px'}}>
      <div className={classes.circulo}>
        <div>aaa</div>
      </div>
    </div>
    
  )
}