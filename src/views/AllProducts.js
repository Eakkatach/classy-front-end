import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Footer from "components/Footer/Footer.js";
// view
import MainHeader from "views/MainHeader"
// image
import coatroom from "assets/img/coatroom.jpg";
import coat1 from "assets/img/coat1.jpg";
// style
import styles from "assets/jss/material-kit-react/views/allproductsStyle";


const useStyles = makeStyles(styles);

const coatCard = (classes, imgCoat, nameCoat, startPrice) => {
  const imageClasses = classNames(
    classes.imgRounded,
    classes.imgGallery,
    classes.imgRaised);
  return (
    <GridItem xs={6} sm={6} md ={4}>
      <Card plain>
        <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
          <img
            src={imgCoat} 
            alt="..."
            className={imageClasses}
          />
        </GridItem>
        <h4  className={classes.cardTitle}>
          {nameCoat}
        <br />
        <small  className={classes.cardSubtitle}>เริ่มต้น {startPrice} บาท</small>
        </h4>
      </Card>
    </GridItem>
  )
}

export default function AllProducts(props) {
  const classes = useStyles()
  return (
    <div>
      {MainHeader('transparent')}
      <Parallax small filter image={coatroom}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
               <h2 className={classes.title}> 
               เลือกเลย ชุดกันหนาวที่ใช่สำหรับคุณ
               </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} >
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              {coatCard(classes,coat1,"Coat 1","200")}
              {coatCard(classes,coat1,"Coat 1","200")}
              {coatCard(classes,coat1,"Coat 1","200")}
              {coatCard(classes,coat1,"Coat 1","200")}
              {coatCard(classes,coat1,"Coat 1","200")}
              {coatCard(classes,coat1,"Coat 1","200")}
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}