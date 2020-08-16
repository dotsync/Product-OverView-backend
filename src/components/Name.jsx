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
    <div className={classes.root}>
      {props.currentProduct ?
        <div id="nameCategoryWrapper">
          <Typography className={classes.category} id="category">
            {props.currentProduct.category}
          </Typography>
          <Typography variant="h4" className={classes.name} id="name">
            {props.currentProduct.name}
          </Typography>
        </div>
        : <span id="noName">no current product</span>}
    </div>
  );
}

export default Name;