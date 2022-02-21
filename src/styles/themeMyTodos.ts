import {createTheme} from '@mui/material';
import {blueGrey, green, red} from '@mui/material/colors';

export const themeMyTodos = createTheme({
    palette: {
        primary: {
            main: blueGrey[700],
        },
        secondary: {
            main: green['A400'],
        },
        error: {
            main: red[400],
        },
    },
});