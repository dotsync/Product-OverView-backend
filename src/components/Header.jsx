import React from 'react';
import  {
  Typography,
  makeStyles,
  TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "75px",
    backgroundColor: "DarkGreen",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  title: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold"
  },
  search: {
    display: "flex",
    color: "white"
  },
  searchText: {
    alignSelf: "center"
  },
  searchIcon: {
    alignSelf: "center"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Typography id="title" className={classes.title}>GreenCommerce</Typography>
        <div className={classes.search}>
          <div className={classes.searchText}>
           <TextField />
          </div>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </div>
  );
}

export default Header;