import { createTheme } from "@mui/material";

const base = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#383838',
    },
    secondary: {
      main: '#2E7AD3',
    },
    background: {
      default: '#212121',
      paper: '#171717'
    },
    text: {
      primary: '#B4B4B4',
    }
  },
  spacing: (value: number) => value * 2,
});

const rebusTheme = createTheme({
  ...base,
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
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: base.spacing(660)
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: base.spacing(7),
          color: base.palette.text.primary,
          backgroundColor: base.palette.primary.main,
          boxShadow: "none",
          fontWeight: 400,
          '& .MuiButton-startIcon': {
            marginRight: base.spacing(7),
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '53px',
          borderRadius: '14px',
        },
        input: {
          paddingTop: '14.5px',
          paddingBottom: '14.5px',
        },
        notchedOutline: {
          borderColor: 'rgba(89, 89, 89, 0.5)',
        }
      }
    }
  }
});

export default rebusTheme;