import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles ((theme) => ({
  slogan: {
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "10px"
  },
  description: {
    fontSize: "small",
  }
}));

const Description = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div id="slogan">
        {props.currentProduct ?
          <Typography className={classes.slogan}>
            {props.currentProduct.slogan}
          </Typography>
          : <span>no current slogan</span>
        }
      </div>
      <div id="description">
        {props.currentProduct ?
          <Typography className={classes.description}>
            {props.currentProduct.description}
          </Typography>
          : <span>no current description</span>
        }
      </div>
    </div>
  );
}

export default Description;