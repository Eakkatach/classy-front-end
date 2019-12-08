import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles'; 
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// style
import styles from "assets/jss/views/product/imageSectionStyle";

// demo pictures
import coat1 from "assets/img/coat1.jpg";

const useStyles = makeStyles(styles);

export default function ImageSection(props) {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRounded,
    classes.imgGallery,
    classes.imgRaised
  );
  const settings = {
    customPaging: function(i) {
      let imgSrc;
      switch (i) {
        case 0:
          imgSrc = coat1;
          break;
        case 1:
          imgSrc = coat1;
          break;
        case 2:
          imgSrc = coat1;
          break;
        default:
          imgSrc = coat1;
      }
      return (
        <img 
          src={imgSrc} 
          alt="..." 
          className={imgClasses} 
        />);
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <GridItem xs={12} sm={12} md={5}>
      <Card plain>
        <GridItem xs={12} sm={12} md={12}
          className={classes.itemGrid}
        >
          <Slider {...settings}>
            <img src={coat1} alt="..." className={imgClasses} />
            <img src={coat1} alt="..." className={imgClasses} />
            <img src={coat1} alt="..." className={imgClasses} />
          </Slider>
        </GridItem>
      </Card>
    </GridItem>
    )
}