import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#270952',
    },
    secondary: {
      main: '#8E59D9',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#4A1874',
    },
  },
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial","Fredoka One" , sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
});

export default theme;
