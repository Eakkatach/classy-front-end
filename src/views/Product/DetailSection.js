import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// style
import styles from "assets/jss/views/product/detailSectionStyle";

const useStyles = makeStyles(styles);

const rentRate = (classes, leftText, rightText) => {
  return (
    <Grid container>
      <GridItem xs={6} sm={6} md={6}>
        <p className={classes.text}> {leftText}</p>
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <p className={classes.textBold}> {rightText}</p>
      </GridItem>
    </Grid>
  );
};

export default function DetailSection(props) {
  const classes = useStyles();

  return(
    <GridItem xs={12} sm={12} md={6}>
      <Card plain>
        <GridItem xs={12} sm={12} md={12}
          className={classes.itemGrid}
        >
          {/******* Product Name *******/}
          <h4 className={classes.title}>
            Black Cool Jacket Zara
          </h4>

          {/* ******Rental Rate ****** */}
          <ExpansionPanel defaultExpanded={true}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1a-header"
            >
              <h4 className={classes.subtitle}>ค่าเช่าชุด</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <GridItem xs={12} sm={12} md={12}
                className={classes.itemGrid}
              >
                <GridContainer justify="center">
                  <GridItem xs={12} sm={6} md={6}
                    className={classes.itemGrid}
                  >
                    {rentRate(classes, "เช่า 1-5 วัน", "฿900")}
                    {rentRate(classes, "เช่า 6-10 วัน", "฿1,800")}
                    {rentRate(classes, "เช่า 11-15 วัน", "฿2,700")}
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}
                    className={classes.itemGrid}
                  >
                    {rentRate(classes, "ค่าประกันชุด", "฿900")}
                  </GridItem>
                </GridContainer>
              </GridItem>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          {/******* Size *******/}
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
                <p className={classes.text}>ไซส์: M</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>วงแขน: 20"</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>อก: 60"</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>เอว: 20"</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>สะโพก: 60"</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>ไหล่กว้าง: 20"</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>ยาว: 60"</p>
              </GridItem>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/******* Suggestion *******/}
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className={classes.subtitle}>คำแนะนำ</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p className={classes.text}>
              {" "}
              ชุดนี้อุณหภูมิประมาณ 20 องศา{" "}
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/******* Note *******/}
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className={classes.subtitle}>หมายเหตุ</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <li className={classes.text}>
              จำนวนวันเช่าชุด นับตั้งแต่วันรับชุดถึงวันคืนชุด
            </li>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </GridItem>
      <br />
      <Button 
        className={classes.buttonFont} 
        color="darkWinter"
      >
        เช่าชุดนี้
      </Button>
      </Card>
    </GridItem>
  )
}