import React, { useEffect, useState } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography
} from '@material-ui/core'

import { themeObject } from './assets/themeObject.js'
import { styleObject } from './assets/styleObject.js'

import Tissues from './components/tissues'

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject)
  const { 
    palette: { type }
  } = theme
  const toogleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light'?'dark':'light'
      }
    }
    localStorage.setItem('@jogo/theme', updatedTheme.palette.type)
    setTheme(updatedTheme)
  }
  return [theme, toogleDarkMode]
}

export default function App() {
  const [theme, toogleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)
  useEffect(() => {
    const userTheme = localStorage.getItem('@jogo/theme')
    userTheme==='dark'&&toogleDarkMode()
  }, [])
  const classes = styleObject()

  const [currentTissue, setCurrentTissue] = useState('Nenhum tecido selecionado')
  const [disivionFlags, setDivisionFlags] = useState({})

  const handleDivide = () => {
    switch (currentTissue.name) {
      case 'epiderme':
        setDivisionFlags({feloderme: true})
        break
    }
  }

  const handleAntiDivide = () => {
    setDivisionFlags({...disivionFlags, antiDiv: true})
  }

  const handlePeriDivide = () => {
    setDivisionFlags({...disivionFlags, periDiv: true})
  }

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline/>
      <Grid container className={classes.root} direction="row" justify="space-evenly" alignItems="center">
        <Grid item>
          <Tissues setCurrentTissue={setCurrentTissue} disivionFlags={disivionFlags}/>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              missões
            </Grid>
            <Grid item>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {currentTissue.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  {(currentTissue.name === 'feloderme')?(
                    <div>
                      <Button color="primary" onClick={handleAntiDivide}>Divisão Periclinal</Button>
                      <Button color="primary" onClick={handlePeriDivide}>Divisão Anticlinal</Button>
                    </div>
                  ):(
                    <Button color="primary" onClick={handleDivide}>dividir</Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid> 
    </ThemeProvider>
  )
}