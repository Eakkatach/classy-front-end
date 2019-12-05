import {cardTitle, container, title, defaultFont } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const homeStyle = {
  smallLine: {
    border: "3px solid #97B8DB",
  },
  defaultFont: {
    ...defaultFont,
    fontSize: "16px",
    fontWeight:"500"
  },
  title: {
    ...defaultFont,
    fontSize : "40px"
  },
  subtitle: {
    ...defaultFont,
    fontSize : "20px"
  },
  subtitle2: {
    ...defaultFont,
    marginTop: "30px",
    fontSize : "20px",
    fontWeight: "700",
    color: "#333333"
  },
  text1: {
    ...defaultFont,
    marginTop: "20px",
    fontSize : "18px",
    fontWeight: "100",
    color:"#828282",
    fontFamily:"'Taviraj', serif"
  },
  title2: {
    ...title,
    fontSize : "25px",
    marginBottom: "0.3rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#333333",
    fontWeight:"1000"
  },
  profileTitle: {
    color: "#3C4858",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: '"Prompt", sans-serif',
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px"
  },
  comment: {
    ...defaultFont,
    color: "#6c757d",
    fontSize: "16px",
  },
  cardTitle: {
    ...cardTitle,
    fontSize: "15px",
    fontWeight:"700",
    color:"#333333",
    fontFamily:"'Taviraj', serif",
  },
  cardSubtitle: {
    fontSize: "14px",
    color:"#828282",
    fontFamily:"'Taviraj', serif",
    display:"inline"
  },
  cardSubtitleBold: {
    color: "#33567B",
    fontSize: "14px",
    fontWeight: "700",
    fontFamily:"'Taviraj', serif",
    display:"inline"
  },
  name: {
    marginTop: "-80px"
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
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  ...imagesStyle,
  profile: {
    marginTop: "170px",
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    }
  },
};

export default homeStyle;
