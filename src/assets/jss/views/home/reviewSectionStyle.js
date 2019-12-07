import {container, title, defaultFont } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const reviewSectionStyle = {
  title: {
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
  name: {
    marginTop: "-80px"
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    textAlign: "center",
    ...container
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
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

export default reviewSectionStyle;
