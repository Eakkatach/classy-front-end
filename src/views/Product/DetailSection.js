import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
// core components
import Slide from "@material-ui/core/Slide";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// image
import qrcode from 'assets/img/qrcode.png';
// style
import styles from "assets/jss/views/product/detailSectionStyle";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

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
  const { product } = props;
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  return(
    <GridItem xs={12} sm={12} md={6}>
      <Card plain>
        <GridItem xs={12} sm={12} md={12}
          className={classes.itemGrid}
        >
          {/******* Product Name *******/}
          <h4 className={classes.title}>
            {product.name}
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
                    {rentRate(classes, "เช่า 1-5 วัน", "฿" + product.priceList[0])}
                    {rentRate(classes, "เช่า 6-10 วัน", "฿" + product.priceList[1])}
                    {rentRate(classes, "เช่า 11-15 วัน", "฿" + product.priceList[2])}
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}
                    className={classes.itemGrid}
                  >
                    {rentRate(classes, "ค่าประกันชุด", "฿" + product.deposit)}
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
                <p className={classes.text}>ไซส์: {product.size}</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>วงแขน: {product.arm}</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>อก: {product.breast}</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>เอว: {product.weist}</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>สะโพก: {product.hip}</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>ไหล่กว้าง: {product.shoulder}</p>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.text}>ยาว: {product.length}</p>
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
              {product.suggest}
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
        onClick={() => setClassicModal(true)}
      >
        เช่าชุดนี้
      </Button>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={classicModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setClassicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>ติดต่อเช่า/สอบถาม</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <p> สามารถทักไลน์แชทเพื่อทำการติดต่อเช่าได้เลยค่ะ </p>
          <p>1. LINE ID: @classywintercoat </p>
          <p>2. Add Line Friends via QR Code</p>
          <img 
            src={qrcode}
            alt="..."
            width="250px"
          />
          
        </DialogContent>
      </Dialog>
      </Card>
    </GridItem>
  )
}