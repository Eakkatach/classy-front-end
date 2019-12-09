import {cardTitle } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const productCardStyle = {
  cardTitle: {
    ...cardTitle,
    fontSize: "14px",
    fontWeight:"700",
    color:"#333333",
    fontFamily:"'Taviraj', serif",
  },
  cardSubtitle: {
    fontSize: "12px",
    color:"#828282",
    fontFamily:"'Taviraj', serif",
    display:"inline"
  },
  cardSubtitleBold: {
    color: "#33567B",
    fontSize: "12px",
    fontWeight: "700",
    fontFamily:"'Taviraj', serif",
    display:"inline"
  },
  ...imagesStyle,
};

export default productCardStyle;
