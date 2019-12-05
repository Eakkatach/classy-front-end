import React from "react";
import classNames from "classnames";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Footer from "components/Footer/Footer.js";
// view
import MainHeader from "views/MainHeader"
// style
import styles from "assets/jss/material-kit-react/views/homeStyle";
// images
import iceland1 from "assets/img/iceland1.jpg";
import coat1 from "assets/img/coat1.jpg";
import profile from "assets/img/christian.jpg";
// Icon
import bubble from "assets/img/bubbles.svg";
import delivery from "assets/img/delivery.svg";
import coat from "assets/img/coat.svg";
import SnowStorm from 'react-snowstorm';

const useStyles = makeStyles(styles);


const imgCard = (classes, src, alt, name, startPrice) => {
  const imageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <GridItem xs={6} sm={6} md={3}>
      <Card plain>
        <GridItem xd={12} sm={12} md={12} className={classes.itemGrid}>
          <img
            src={src}
            alt={alt}
            className={imageClasses}
          />
        </GridItem> 
        <h4 className={classes.cardTitle}>
          {name}
          <br />
          <small className={classes.cardSubtitle}>เริ่มต้น</small>
          <small className={classes.cardSubtitleBold}> ฿{startPrice} </small>
          </h4>
      </Card>
    </GridItem>  
  )
}

const reviewSlide = (classes, imgProfile, name , comment) => {
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  return (
    <div className={classes.profile}>
      <img
        src={imgProfile}
        alt="..."
        className={imageClasses}
      />
      <div className={classes.name}>
      <h3 className={classes.profileTitle}>
        {name}
        <br />
        <small className={classes.comment}>{comment}</small>
        </h3>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

const smallRec = (classes) => {
  return (
    <GridContainer justify="center">
      <GridItem xs={3} sm={3} md={2}>
        <hr className={classes.smallLine} />
      </GridItem>
    </GridContainer>
  )
}


export default function Home(props) {
  const classes = useStyles();

  // for review slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <div>
      {MainHeader("transparent")}

      {/* Background Section */}
      <div>
        <SnowStorm />
        <Parallax filter image={iceland1}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>

                <h2 className={classes.title}> 
                เช่าเสื้อกันหนาว
                </h2>

                <h2 className={classes.subtitle}> 
                สวย คุ้มค่า รอไร
                </h2>
                <br/>

                <Button
                  color="white"
                  size="lg"
                  href="/allproducts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.defaultFont}
                  >
                  เริ่มค้นหา
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>

      <br /> <br />
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          {/* Why us section */}
          <div className={classes.section}>
          <h2 className={classes.title2}>ยินดีต้อนรับสู่ Classy Winter Coat</h2>
          {smallRec(classes)}
          <p className={classes.text1}> ร้านเช่าเสื้อกันหนาวออนไลน์ ที่คุณจ่ายน้อยกว่า ก็มีเสื้อกันหนาวสวยๆ ใส่ไม่ซ้ำ ถ่ายรูปสนุก</p>
          <br/>
          <GridContainer justify="center">

          <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xd={12} sm={12} md={12}>
                  <img 
                    src={coat} 
                    width="50px" 
                    alt="..." 
                  />
                  <p className={classes.subtitle2}>อุ่น สวย คุ้มค่า</p>
                  <p className={classes.text1}> จ่ายน้อย ก็ได้เสิ้อกันหนาวคุณภาพดีได้ </p>
                </GridItem>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xd={12} sm={12} md={12}>
                  <img src={bubble} width="50px"  alt="..." />
                  <p className={classes.subtitle2}>สะอาด ใหม่ มั่นใจ</p>
                  <p className={classes.text1}> ทุกชุดซื้อใหม่ออกจากช้อป และส่งร้านซักแห้งทุกตัว มั่นใจในเรื่องของความสะอาดได้ 100%</p>
                </GridItem>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xd={12} sm={12} md={12}>
                 <img src={delivery} width="50px"  alt="..."  />
                  <p className={classes.subtitle2}>รับ/คืน ง่าย สะดวก</p>
                  <p className={classes.text1}> รับคืนชุด สามารถมารับเองที่ร้าน หรือใช้บริการแมสเซ็นเจอร์ หรือส่งพัสดุ ง่ายดาย และสะดวก</p>
                </GridItem>
              </Card>
            </GridItem>
            
          </GridContainer>
          </div>

          {/* Hot product section */}
          <div className={classes.section}>
            <h2 className={classes.title2}>เสื้อกันหนาวมาแรง</h2>
            {smallRec(classes)}
              <GridContainer justify="center">
              {imgCard(classes, coat1, "...", "Black Cool Jacket Zara", "200")}
              {imgCard(classes, coat1, "...", "Black Cool Jacket Zara", "200")}
              {imgCard(classes, coat1, "...", "Black Cool Jacket Zara", "200")}
              {imgCard(classes, coat1, "...", "Black Cool Jacket Zara", "200")}
              </GridContainer>
              <Button
                color="winter"
                size="lg"
                href="/allproducts"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.defaultFont}
              >
                ดูทั้งหมด
              </Button>
          </div>

          
          {/* Review section */}
          <div className={classes.section}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xd={12} sm={12} md={12} className={classes.marginAuto}>
                  <h2 className={classes.title2}> รีวิวจากลูกค้า </h2>
                  {smallRec(classes)}
                  <Slider {...settings}>
                    {reviewSlide(classes, profile, "Joice Eakkatach", "รักเจ้าของมากๆ ครับ")}
                    {reviewSlide(classes, profile, "Joice Eakkatach", "รักเจ้าของมากๆ ครับ")}
                  </Slider>
                </GridItem>
              </GridContainer>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
