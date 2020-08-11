import React from 'react';
import {makeStyles, Grid, Typography} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    display: "flex",
    height: "75%"
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
    featureListItems = details.map((feature) => {
      if (feature.value === "null") {
        return <Grid container key={feature.feature} className={classes.featureContainer}>
                <Grid item className={classes.check}>
                  <CheckIcon />
                </Grid>
                 <Grid item>
                   <Typography className={classes.featureText}>{feature.feature}</Typography>
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
    <div id="features" className={classes.root}>
      {props.currentProduct ?
        <div className={classes.features}>
          {featureListItems}
        </div>
        : <span>no current features</span>
      }
    </div>
  );
}

export default Details;