import {title, defaultFont } from "assets/jss/material-kit-react.js";

const welcomeSectionStyle = {
  subtitle: {
    ...defaultFont,
    marginTop: "30px",
    fontSize : "20px",
    fontWeight: "700",
    color: "#333333"
  },
  text: {
    ...defaultFont,
    marginTop: "20px",
    fontSize : "18px",
    fontWeight: "100",
    color:"#828282",
    fontFamily:"'Taviraj', serif"
  },
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
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
};

export default welcomeSectionStyle;
