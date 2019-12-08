import React from 'react';
import classNames from 'classnames';
import { makeStyles } from "@material-ui/core/styles";
// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
// views
import MainHeader from "./MainHeader";
import HowToRentSection from './HowToRentSection';
// styles
import styles from "assets/jss/views/productStyle";

// demo pictures
import iceland1 from "assets/img/iceland1.jpg";

const useStyles = makeStyles(styles);

export default function Product(props) {
  const classes = useStyles();

  return(
    <div>
      <MainHeader color="white" />
      <Parallax filter image={iceland1} />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <div className={classes.section}>
                <HowToRentSection />
              </div>
            </div>
          </div>
        </GridItem>
      </GridContainer>
      <Footer />
    </div>
  )
}