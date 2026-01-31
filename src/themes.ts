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
                    main: '#c1c4c9ff'
                },
                background: {
                default: '#efefefff',
                paper: '#ffffffff',
                },
                text: {
                    primary: 'grey.900'
                }
            },
        },
        dark: {
            palette: {
                mode: 'dark',    
                primary: {
                    main: '#106191'
                },
                secondary: {
                    main: '#808696ff'
                },
                background: {
                default: '#001725ff',
                paper: '#252f36ff',
                },
                text: {
                    primary: '#ffff'
                }
            },
        }
    },
    typography: {
        fontFamily: 'Poppins, "Roboto", sans-serif',
        h5: {
            fontWeight: 600
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                input: ({ theme }) => ({
                ...(theme.palette.mode === 'dark'
                    ? {
                        '&:-webkit-autofill': {
                        WebkitBoxShadow:
                            '0 0 0 1000px #32424dff inset',
                        }
                    }
                    : {}),
                }),
            },
        },
    },

})