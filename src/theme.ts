import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette:{
        primary: {
            main: '#f0f8ff'
        },
        secondary: {
            main: red[500]
        },
        text: { 
           secondary: '#f0f8ff'
        }
    },
    typography: {
        fontFamily: ['Montserrat','sans-serif'].join(','),
        allVariants:{
            color:  '#f0f8ff',
            fontSize: 16
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        },
    }
})

export default theme