import React from 'react';
import {makeStyles, Grid, Typography} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    display: "flex"
  },
  features: {
    borderLeft: '2px solid black',
    padding: '0.5em'
  },
  check: {
    paddingRight: "2px"
  },
  featureText: {
    fontSize: "small",
    paddingTop: "4px"
  }
}));

const Details = (props) => {
  const classes = useStyles();

  let featureListItems;
  if (props.currentProduct) {
    const details = props.currentProduct.features;
    featureListItems = details.map((feature, index) => {
      if (feature.value === "null") {
        return <Grid container key={feature.feature} id={index} className={classes.featureContainer}>
                <Grid item className={classes.check}>
                  <CheckIcon />
                </Grid>
                 <Grid item>
                   <Typography className={classes.featureText} id="noValue">{feature.feature}</Typography>
                 </Grid>
               </Grid>
      }
      return <Grid container key={feature.feature}>
               <Grid item className={classes.check}>
                 <CheckIcon />
               </Grid>
               <Grid item>
                 <Typography className={classes.featureText}>
                  {feature.feature} -- {feature.value}
                 </Typography>
               </Grid>
             </Grid>
    })
  }

  return (
    <div className={classes.root}>
      {props.currentProduct ?
        <div id="features" className={classes.features}>
          {featureListItems}
        </div>
        : <span id="noFeatures">no current features</span>
      }
    </div>
  );
}

export default Details;