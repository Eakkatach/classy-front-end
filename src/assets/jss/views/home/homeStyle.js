import { container, defaultFont } from "assets/jss/material-kit-react.js";

const homeStyle = {
  title: {
    ...defaultFont,
    fontSize : "40px", 
  },
  subtitle: {
    ...defaultFont,
    fontSize : "20px",
  },
  button:{
    ...defaultFont,
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    textAlign: "center",
    ...container
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 10px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  
};

export default homeStyle;
