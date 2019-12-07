import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// style
import styles from "assets/jss/views/home/productCardStyle";
// demo image
import coat1 from "assets/img/coat1.jpg";

const useStyles = makeStyles(styles);

export default function ProductCard(props) {
  const classes = useStyles();
  return(
    <GridItem xs={6} sm={6} md={4}>
      <Card plain>
        <GridItem 
          xd={12} 
          sm={12} 
          md={12} 
          className={classes.itemGrid}
        >
          <img
            src={coat1}
            alt={props.alt}
            className={
              classNames(
                classes.imgRounded, 
                classes.imgGallery)
            }
          />
        </GridItem>
        <h4 className={classes.cardTitle}>
          {props.name}
          <br />
          <small className={classes.cardSubtitle}>
            เริ่มต้น :
          </small>
          <small className={classes.cardSubtitleBold}> 
             ฿{props.startPrice}
          </small>
        </h4>
      </Card>
    </GridItem>
  )
  
}