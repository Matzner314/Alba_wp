import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import PropTypes from 'prop-types'


const webTheme = createTheme({
    typography: {
        h1: {
            fontFamily: 'Roboto Slab',
            fontSize: '36px',
            fontWeight: 'bold',
            lineHeight: '50px',
            color: 'black',
        },

        h3: {
            fontFamily: 'Exo 2',
            fontSize: '36px',
            fontWeight: 'bold',
            lineHeight: '43px',
            color: '#5FAA00;',
        },

        h4: {
            fontFamily: 'Roboto Slab',
            fontSize: '26px',
            fontWeight: '900'
        },

        h5: {

            fontFamily: 'Exo 2',
            fontSize: '21px',
            fontWeight: '400'
        },

    },


    palette: {
        primary: {
            light: '#9455fe',
            main: '#ffffff',
            dark: '#1a0098',
            contrastText: '#fff',
        },

        secondary: {
            light: '#ff8fff',
            main: '#5FAA00',
            dark: '#9828b4',
            contrastText: '#fff',
        },

        text: {
            primary: '#000000',
            secondary: '#5FAA00',
            white: '#fff',
        },
    }
})

const WebTheme = ({ children }) => {
    return <ThemeProvider theme={webTheme}>{children}</ThemeProvider>
}

WebTheme.propTypes = {
    children: PropTypes.node.isRequired,
}

export default WebTheme;