import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// style
import styles from "assets/jss/views/howToRentSectionStyle.js";
// icon
import one from "assets/img/one.svg";
import two from "assets/img/two.svg";
import three from "assets/img/three.svg";
import four from "assets/img/four.svg";
import five from "assets/img/five.svg";
import six from "assets/img/six.svg";

const useStyles = makeStyles(styles);

export default function HowToRentSection(props) {
  const classes = useStyles()
  return (
    <GridContainer justify="center">

      <GridItem xs={12} sm={12} md={12}>
        <h4 className={classes.title}>รายละเอียดการเช่าชุด</h4>
      </GridItem>

      <GridItem xs={12} sm={12} md={4}>
        <Card plain>
          <GridItem xs={12} sm={12} md={12}>
            <img src={one} width="50px" alt="..." />
            <p className={classes.subtitle}>
              แจ้งสินค้าที่ลูกค้าต้องการเช่าผ่านทาง Line
            </p>
          </GridItem>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={4}>
        <Card plain>
          <GridItem xs={12} sm={12} md={12}>
            <img src={two} width="50px" alt="..." />
            <p className={classes.subtitle}>
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
            <p className={classes.subtitle}>
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
            <p className={classes.subtitle}>
              กรณีต้องการเปลี่ยน/ยกเลิกสินค้า{" "}
            </p>
          </GridItem>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={4}>
        <Card plain>
          <GridItem xs={12} sm={12} md={12}>
            <img src={five} width="50px" alt="..." />
            <p className={classes.subtitle}>
              รับชุด 
            </p>
          </GridItem>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={4}>
        <Card plain>
          <GridItem xs={12} sm={12} md={12}>
            <img src={six} width="50px" alt="..." />
            <p className={classes.subtitle}>
              คืนชุด 
            </p>
          </GridItem>
        </Card>
      </GridItem>
    </GridContainer>
  )
}