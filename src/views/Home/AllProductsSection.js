import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from 'components/Grid/GridContainer';
// styles
import styles from 'assets/jss/views/home/allProductsSectionStyle';
// views
import ProductCard from './ProductCard';
import SmallLine from '../SmallLine';
// model (database)
import productList from 'models/products';

const useStyles = makeStyles(styles);

export default function AllProductsSection(props) {
  const classes = useStyles();

  return(
    <div className={classes.section}>
      <h2 className={classes.title}> เสื้อกันหนาวทั้งหมด </h2>
      <SmallLine />
      <GridContainer justify="center">
        {
          productList.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              alt="..." 
              name={product.name}
              startPrice={product.priceList[0]}
            />

          ))
        }
      </GridContainer>
    </div>
  )
}