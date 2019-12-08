import { defaultFont, container, cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const productStyle = {
  line:{
    marginLeft: "1rem",
    marginRight: "1rem",
    marginBottom: "20px"
  },
  title2:{
    ...title,
    fontSize: '20px',
    fontWeight: "700",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px"
  },
  subtitle2: {
    ...defaultFont,
    marginTop: "30px",
    fontSize : "16px",
    fontWeight: "100",
    color: "#333333"
  },
  container: {
    marginTop: "-600px",
    zIndex: "12",
    color: "#FFFFFF",
    textAlign: "center",
    ...container
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    fontSize: '25px',
    marginTop: "10px",
    marginLeft: "10px",
    marginBottom: "25px",
    minHeight: "32px",
    fontWeight: "700",
    textDecoration: "none",
    textAlign: "left"
  },
  subtitle: {
    ...cardTitle,
    fontSize: '15px',
    marginTop: "20px",
    fontWeight: "800",
  },
  text1: {
    marginLeft:"0rem",
    fontFamily: '"Prompt", sans-serif',
    fontSize: "16px",
    fontWeight: "500",
    textAlign: "left",
    color:"#333333",
  },
  text2: {
    marginLeft:"0rem",
    fontFamily: '"Prompt", sans-serif',
    fontWeight: "100",
    textAlign: "left",
    fontSize:"13px",
    color:"#828282",
  },
  buttonFont: {
    marginLeft:"30px",
    marginRight:"30px",
    fontFamily: '"Prompt", sans-serif',
    fontSize: "1.153rem",
    fontWeight: "300",
    lineHeight: "1.5em"
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
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  }
};

export default productStyle;
