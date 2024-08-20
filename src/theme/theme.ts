import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber, grey, blue } from "@mui/material/colors";

// Create a base theme
let theme = createTheme({
  palette: {
    primary: {
      light: deepPurple[300],
      main: deepPurple[500],
      dark: deepPurple[700],
      contrastText: "#fff",
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
      contrastText: "#000",
    },
    background: {
      default: grey[100],
      paper: "#fff",
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: blue[500],
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "8px 16px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: deepPurple[50],
          color: deepPurple[900],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.07), 0px 1px 10px 0px rgba(0,0,0,0.06)",
          borderRadius: 12,
        },
      },
    },
  },
});

// Make typography responsive
theme = responsiveFontSizes(theme);

export default theme;
