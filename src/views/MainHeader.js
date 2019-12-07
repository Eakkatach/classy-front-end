import React from 'react'
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

export default function MainHeader(props) {
  return (
    <Header
        color={props.color}
        brand="CLASSY WINTER COAT"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        
      />
  )
}


