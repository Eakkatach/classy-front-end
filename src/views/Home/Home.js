import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Element} from 'react-scroll'
// core components
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
// view
import MainHeader from "../MainHeader";
import AllProductsSection from "./AllProductsSection";
import WelcomeSection from './WelcomeSection';
import ReviewSection from './ReviewSection';
// style
import styles from "assets/jss/views/home/homeStyle";
// images
import iceland1 from "assets/img/iceland1.jpg";
// GIF
import SnowStorm from 'react-snowstorm';

const useStyles = makeStyles(styles)

export default function Home(props) {  

  const classes = useStyles();
  return (
    <div>
      <MainHeader color="transparent" />
      {/* Background Section */}
      <div>
        <SnowStorm />
        <Parallax filter image={iceland1}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}> 
                เช่าเสื้อกันหนาวสำหรับผู้หญิง
                </h2>
                <h2 className={classes.subtitle}> 
                จ่ายน้อยกว่า ได้รูปสวย ชุดไม่ซ้ำ เช่าเลย
                </h2>
                <br/>
                <Link 
                  activeClass="active" 
                  to="allproducts" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                >
                  <Button
                    color="white"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.button}
                    >
                    เริ่มค้นหา
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
      <br /> <br />
      {/* Sections */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WelcomeSection />
          <Element name="allproducts">
            <AllProductsSection />
          </Element>
          <ReviewSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

