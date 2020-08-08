import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  announcement: {
    alignSelf: "center",
    padding: "10px",
    fontSize: "10px",
    fontStyle: "italic"
  }
}))

const Announcement = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.announcement}>IO Silver is the future of web development</Typography>
    </div>
  );
}

export default Announcement;