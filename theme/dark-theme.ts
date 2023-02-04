import { createTheme } from "@mui/material";
import {  red } from "@mui/material/colors";

 const darkTheme = createTheme({
  palette: {
    mode: "dark",

    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiAppBar:{
      defaultProps:{},
      styleOverrides:{
        root:{
          backgroundColor:'#4a148c',
          elevation: 0
        }
      }
    }

  },
});

export default darkTheme