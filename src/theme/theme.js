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
          textShadow: "drop-shadow(#000000 0px 3px 3px)",
          justifySelf: "center",
          alignItems: "center",
          whiteSpace: "normal",
          width: "255px",
          filter: "drop-shadow(#000000d8 0px 5px 5px)",
          overflow: "hidden",

          img: {
            width: "2vw",
            marginLeft: "-1vw",
            marginRight: "0.3vw",
            whiteSpace: "normal",
            filter: "dropShadow(#000000d6 0px 5px 5px)",
          },

          "&.Mui-selected": { backgroundColor: "blue" },

          "& Mui-root": { color: "orange" },

          "&:hover": {
            backgroundColor: "#e7d6ac",
          },

          "&:last-of-type": {
            width: "2px",
            marginRight: "10%",
            zIndex: "2",
          },
        },
      },

      contained: {
        zIndex: "22",
        color: "#fff",
        width: "3px",
        justifyContent: "space-between",
        marginRight: "12em",
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          top: "10px",
          backgroundColor: "#3d2410",
          width: "255px",
          color: "white",
          flex: "0 1 0%",
          whiteSpace: "normal",
          cursor: "pointer",
          fontSize: "auto",
          filter: "drop-shadow(#000000d8 0px 5px 5px)",
          border: "solid #836018 3px",
          position: "relative",
          display: "flex",
          justifySelf: "center",
          alignItems: "center",
          overflow: "hidden",

          "&.Mui-selected": {
            backgroundColor: "#5a1414",
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
          left: "-1em",
          marginLeft: "0.5em",
          marginRight: "0.25em",
          backgroundColor: "transparent",
          paddingTop: "0px",
          paddingBottom: "0px",
          img: {
            borderRadius: "50%",
            width: "1.5vw",
            marginLeft: "-0.1vw",
            marginRight: "0.3vw",
            whiteSpace: "normal",
            filter: "dropShadow(#000000d6 0px 5px 5px)",
          },
        },
      },
    },

    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "inherit",
          maxHeight: "6vw",
          lineHeight: "1px",
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
