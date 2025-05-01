import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
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
        allVariants: {
            fontFamily: '"Source Sans 3",sans-serif',
            fontSize: 18,
            fontWeight: 500,
            color: '#f0f8ff',
            textAlign: 'center'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        },
    }
})

export default theme