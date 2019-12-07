import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// views
import SmallLine from '../SmallLine';
// style
import styles from 'assets/jss/views/home/welcomeSectionStyle';
// Icon
import bubble from "assets/img/bubbles.svg";
import delivery from "assets/img/delivery.svg";
import coat from "assets/img/coat.svg";

const useStyles = makeStyles(styles);

export default function WelcomeSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>
        Welcome to ClassyWinterCoat
      </h2>
      <SmallLine />
      <p className={classes.text}> 
        ร้านเช่าเสื้อกันหนาวออนไลน์ ที่
        คุณจ่ายน้อยกว่า ก็
        มีเสื้อกันหนาวสวยๆ ใส่
        ไม่ซ้ำ ถ่ายรูปสนุก
      </p>
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
              <p className={classes.subtitle}>
                อุ่น สวย คุ้มค่า
              </p>
              <p className={classes.text}> 
                จ่ายน้อย ก็ได้เสิ้อกันหนาวคุณภาพดีได้ 
              </p>
            </GridItem>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card plain>
            <GridItem xd={12} sm={12} md={12}>
              <img src={bubble} width="50px"  alt="..." />
              <p className={classes.subtitle}>
                สะอาด ใหม่ มั่นใจ
              </p>
              <p className={classes.text}> 
              ทุกชุดซื้อใหม่ออกจากช้อป และ
              ส่งร้านซักแห้งทุกตัว มั่น
              ใจในเรื่องของความสะอาดได้ 100%
              </p>
            </GridItem>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
          <Card plain>
            <GridItem xd={12} sm={12} md={12}>
            <img src={delivery} width="50px"  alt="..."  />
              <p className={classes.subtitle}>
                รับ/คืน ง่าย สะดวก
              </p>
              <p className={classes.text}> 
              รับคืนชุด สามารถ
              มารับเองที่ร้าน หรือ
              ใช้บริการแมสเซ็นเจอร์ หรือ
              ส่งพัสดุ ง่ายดาย และสะดวก
              </p>
            </GridItem>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  )
}