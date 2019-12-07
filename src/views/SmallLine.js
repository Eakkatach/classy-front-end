import React from 'react';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';


export default function SmallLine(props) {
  return (
    <GridContainer justify="center">
      <GridItem xs={3} sm={3} md={2}>
        <hr style={{border: "3px solid #97B8DB"}} />
      </GridItem>
    </GridContainer>
  )
}
