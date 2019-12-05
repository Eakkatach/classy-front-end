import {cardTitle, container, title, defaultFont } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const allproductsStyle = {
  defaultFont,
  title: {
    ...defaultFont,
    fontSize : "40px"
  },
  title2: {
    ...title,
    fontSize : "25px",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
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
  cardTitle,
  cardSubtitle: {
    color: "#3C4858",
    fontSize: "16px"
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
    margin: "-60px 10px 0px",
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

export default allproductsStyle;
