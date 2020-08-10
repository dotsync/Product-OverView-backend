import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px",
  },
  category: {
    fontSize: 'small',
    textTransform: 'uppercase'
  },
  name: {
    fontWeight: "bold"
  }
}));

const Name = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="name">
      {props.currentProduct ?
        <div id="name">
          <Typography className={classes.category} id="category">
            {props.currentProduct.category}
          </Typography>
          <Typography variant="h4" className={classes.name}>
            {props.currentProduct.name}
          </Typography>
        </div>
        : <span id="name">no current product</span>}
    </div>
  );
}

export default Name;