import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#C9CCD5',
    },
    secondary: {
      main: '#93B5C6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFE3E3',
    },
  },
});

export default theme;
