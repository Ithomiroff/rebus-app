import { createTheme } from "@mui/material";

const base = createTheme({
  spacing: (value: number) => value * 2,
});

const rebusTheme = createTheme({
  ...base,
  palette: {
    mode: 'dark',
    background: {
      default: '#212121',
      paper: '#171717'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: base.spacing(30),
          boxShadow: 'none',
          justifyContent: 'center',
          paddingLeft: base.spacing(21),
          backgroundImage: "none"
        }
      }
    }
  }
});

export default rebusTheme;