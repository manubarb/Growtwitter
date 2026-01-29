import { createTheme } from "@mui/material"

export const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                mode: 'light',    
                primary: {
                    main: '#188bd0'
                },
                secondary: {
                    main: '#f5f5f5'
                },
                background: {
                default: '#efefefff',
                paper: '#ffffffff',
                },
            },
        },
        dark: {
            palette: {
                mode: 'dark',    
                primary: {
                    main: '#106191'
                },
                secondary: {
                    main: '#f5f5f5'
                },
                background: {
                default: '#001725ff',
                paper: '#252f36ff',
                },
            },
        }
    },
    typography: {
        fontFamily: 'Poppins, "Roboto", sans-serif',
        h5: {
            fontWeight: 600
        }
    }

})