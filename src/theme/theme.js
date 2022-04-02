import { createTheme } from "@mui/material";
import "../styles/colors.scss";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          backgroundColor: "#e7d6ac",
          color: "#5a1414",
          textShadow: "drop-shadow(rgba(0, 0, 0, 1) 0px 3px 3px)",
          justifySelf: "center",
          alignItems: "center",
          width: "235px",
          paddingTop: "0.2vw",
          paddingottom: "0.15vw",
          marginRight: "0.1vw",
          left: "0.4vw",
          "&.Mui-selected": { backgroundColor: "blue" },
          "& Mui-root": { background: "orange" },
          "&:hover": {
            backgroundColor: "#e7d6ac",
          },
          filter: "drop-shadow(rgba(0, 0, 0, 0.6) 0px 5px 5px)",
          //border: "solid rgba(50, 30, 20, 0.8) 3px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(61, 36, 16)",
          color: "white",
          width: "235px",
          //paddingTop: "0.2vw",
          //paddingBottom: "0.15vw",
          flex: "0 1 0%",
          whiteSpace: "normal",
          //lineHeight: "6px",
          cursor: "pointer",
          //position: "absolute",
          fontSize: "auto",
          //marginLeft: "-120px",
          filter: "drop-shadow(rgba(0, 0, 0, 0.6) 0px 5px 5px)",
          border: "solid rgba(50, 30, 20, 0.8) 3px",
          position: "relative",
          display: "flex",
          minHeight: "3.7vw",
          maxHeight: "7.5vw",
          justifySelf: "center",
          alignItems: "center",
          overflow: "hidden",

          "&.Mui-selected": {
            backgroundColor: "rgb(102, 40, 0)",
            border: "#ccad33 solid 2px",
            "&:hover": {
              backgroundColor: "black",
            },
          },
          "&:hover": {
            backgroundColor: "black",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          left: "-7em",
          backgroundColor: "transparent",
          paddingTop: "0px",
          paddingBottom: "0px",
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "inherit",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff0",
          boxShadow: "inherit",
        },
      },
    },
  },
});

export default theme;
