import { cardTitle, title } from "assets/jss/material-kit-react.js";

const detailSectionStyle = {
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
  text: {
    marginLeft:"0rem",
    fontFamily: '"Prompt", sans-serif',
    fontWeight: "100",
    textAlign: "left",
    fontSize:"13px",
    color:"#828282",
  },
  textBold: {
    marginLeft:"0rem",
    fontFamily: '"Prompt", sans-serif',
    fontSize: "16px",
    fontWeight: "500",
    textAlign: "left",
    color:"#333333",
  },
  buttonFont: {
    marginLeft:"30px",
    marginRight:"30px",
    fontFamily: '"Prompt", sans-serif',
    fontSize: "1.153rem",
    fontWeight: "300",
    lineHeight: "1.5em"
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  }
};

export default detailSectionStyle;