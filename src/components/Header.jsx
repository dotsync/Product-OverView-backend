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
    backgroundColor: "lightGreen",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  title: {
    alignSelf: "center",
  },
  search: {
    display: "flex",
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
        <Typography id="title" className={classes.title}>IO Silver</Typography>
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