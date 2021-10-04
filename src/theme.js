import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#628395',
    },
    secondary: {
      main: '#262A53',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFA0A0',
    },
  },
});

export default theme;
