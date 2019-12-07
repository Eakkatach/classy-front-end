import React from 'react';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// views
import SmallLine from '../SmallLine';
// style
import styles from 'assets/jss/views/home/reviewSectionStyle';
// models (database)
import reviews from 'models/reviews';

// demo
import profile from "assets/img/christian.jpg";


const useStyles = makeStyles(styles);

export default function ReviewSection(props) {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  // for review slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xd={12} sm={12} md={12} className={classes.marginAuto}>
            <h2 className={classes.title}> รีวิวจากลูกค้า </h2>
            <SmallLine />
            <Slider {...settings}>
              {
                reviews.map(review => (
                  <div 
                    key={review.id}
                    className={classes.profile}
                  >
                    <img
                      src={profile}
                      alt="..."
                      className={imgClasses}
                    />
                    <div className={classes.name}>
                      <h3 className={classes.profileTitle}>
                        {review.fullname}
                        <br />
                        <small className={classes.comment}>
                          {review.comment}
                        </small>
                      </h3>
                    </div>
                    <br /><br /><br /><br />
                  </div>
                ))
              }
            </Slider>
          </GridItem>
        </GridContainer>
      </div>
    </div>

  )
}