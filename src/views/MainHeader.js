import React from 'react'
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

export default function MainHeader(color) {
  return (
    <Header
        color={color}
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




