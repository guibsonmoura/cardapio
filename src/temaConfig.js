import React from 'react';
import {createTheme, responsiveFontSizes} from '@mui/material'

let tema = createTheme({
    palette:{
        primary: {
            main: '#2222',

        },
        secondary: {
            main: '#fff'
        }

    },
    
    typography: {
        h1: {
          fontWeight:'bold',
        },
        h2: {
          fontWeight: 600,

          
        },
        h5: {
            fontWeight:600,
        },
        button: {
          fontStyle: 'roboto',
        },
      },
    
        
})
tema = responsiveFontSizes(tema)

export default tema