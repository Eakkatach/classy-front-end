import React from "react";
import Slider from "react-slick";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "components/Footer/Footer.js";
// view
import MainHeader from "views/MainHeader";
// style
import styles from "assets/jss/material-kit-react/views/productStyle.js";
// image
import coat1 from "assets/img/coat1.jpg";
import iceland1 from "assets/img/iceland1.jpg";
// icon
import one from "assets/img/one.svg";
import two from "assets/img/two.svg";
import three from "assets/img/three.svg";
import four from "assets/img/four.svg";
import five from "assets/img/five.svg";
import six from "assets/img/six.svg";

const useStyles = makeStyles(styles);

const rentRate = (classes, leftText, rightText) => {
  return (
    <Grid container>
      <GridItem xs={6} sm={4} md={6}>
        <p className={classes.text2}> {leftText}</p>
      </GridItem>
      <GridItem xs={6} sm={3} md={6}>
        <p className={classes.text1}> {rightText}</p>
      </GridItem>
    </Grid>
  );
};

export default function Product(props) {
  const classes = useStyles();
  const imageClasses = classNames(
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
      return <img src={imgSrc} alt="..." className={imageClasses} />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      {MainHeader("transparent")}
      <Parallax small filter image={iceland1} />

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <div className={classes.section}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={5}>
                    <Card plain>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.itemGrid}
                      >
                        <Slider {...settings}>
                          <img src={coat1} alt="..." className={imageClasses} />
                          <img src={coat1} alt="..." className={imageClasses} />
                          <img src={coat1} alt="..." className={imageClasses} />
                        </Slider>
                      </GridItem>
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                    <Card plain>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.itemGrid}
                      >
                        <h4 className={classes.title}>
                          Black Cool Jacket Zara
                        </h4>
                      </GridItem>
                      <ExpansionPanel>
                        <ExpansionPanelDetails>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={12}
                            className={classes.itemGrid}
                          >
                            <h4 className={classes.subtitle}>ค่าเช่าชุด</h4>
                            <br />
                            <GridContainer justify="center">
                              <GridItem
                                xs={12}
                                sm={12}
                                md={6}
                                className={classes.itemGrid}
                              >
                                {rentRate(classes, "เช่า 1-5 วัน", "฿900")}
                                {rentRate(classes, "เช่า 6-10 วัน", "฿1,800")}
                                {rentRate(classes, "เช่า 11-15 วัน", "฿2,700")}
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={6}
                                className={classes.itemGrid}
                              >
                                {rentRate(classes, "ค่าประกันชุด", "฿900")}
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <h4 className={classes.subtitle}>รายละเอียดชุด</h4>
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails>
                          <Grid container>
                            <GridItem xs={6} sm={6} md={6}>
                              <p className={classes.text2}>ไซส์: M</p>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <p className={classes.text2}>วงแขน: 20"</p>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <p className={classes.text2}>อก: 60"</p>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <p className={classes.text2}>เอว: 20"</p>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <p className={classes.text2}>สะโพก: 60"</p>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <p className={classes.text2}>ไหล่กว้าง: 20"</p>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                              <p className={classes.text2}>ยาว: 60"</p>
                            </GridItem>
                          </Grid>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>

                      <ExpansionPanel>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <h4 className={classes.subtitle}>คำแนะนำ</h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <p className={classes.text2}>
                            {" "}
                            ชุดนี้อุณหภูมิประมาณ 20 องศา{" "}
                          </p>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <h4 className={classes.subtitle}>หมายเหตุ</h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <li className={classes.text2}>
                            {" "}
                            จำนวนวันเช่าชุด นับตั้งแต่วันรับชุดถึงวันคืนชุด{" "}
                          </li>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>

                      <br />
                      <Button className={classes.buttonFont} color="darkWinter">
                        เช่าชุดนี้
                      </Button>
                    </Card>
                  </GridItem>
                </GridContainer>

                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <h4 className={classes.title2}>รายละเอียดการเช่าชุด</h4>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={12}>
                        <img src={one} width="50px" alt="..." />
                        <p className={classes.subtitle2}>
                          แจ้งสินค้าที่ลูกค้าต้องการเช่าผ่านทาง Line
                        </p>
                      </GridItem>
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={12}>
                        <img src={two} width="50px" alt="..." />
                        <p className={classes.subtitle2}>
                          รอคอนเฟิร์มจากทางร้าน
                          พร้อมออกใบชำระค่าเช่าและมัดจำสินค้า
                        </p>
                      </GridItem>
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={12}>
                        <img src={three} width="50px" alt="..." />
                        <p className={classes.subtitle2}>
                          ชำระเงินโดยโอนเงินให้บัญชีทางร้าน
                          พร้อมส่งสลิปการโอนเงินให้ทางร้าน
                        </p>
                      </GridItem>
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={12}>
                        <img src={four} width="50px" alt="..." />
                        <p className={classes.subtitle2}>
                          กรณีต้องการเปลี่ยน/ยกเลิกสินค้า{" "}
                        </p>
                      </GridItem>
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={12}>
                        <img src={five} width="50px" alt="..." />
                        <p className={classes.subtitle2}>รับชุด </p>
                      </GridItem>
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem xs={12} sm={12} md={12}>
                        <img src={six} width="50px" alt="..." />
                        <p className={classes.subtitle2}>คืนชุด </p>
                      </GridItem>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </GridItem>
      </GridContainer>
      <Footer />
    </div>
  );
}
