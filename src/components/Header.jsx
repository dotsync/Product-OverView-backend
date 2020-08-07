import React from 'react';
import Appbar from '@material-ui/core/Appbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  AppBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "75px",
  },
  title: {
    marginLeft: "20px",
    marginTop: "20px"
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: "20px"
  },
  searchIcon: {
    alignSelf: "center",
  },
  searchText: {
    alignSelf: "center",
    marginBottom: "5px",
    underline: "white",
  }
}));

export default function Header () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar className={classes.AppBar}>
        <Typography
          id="title"
          className={classes.title}
          variant="h6"
          noWrap>IO Silver</Typography>
        <div className={classes.search}>
          <div className={classes.searchText}>
            <TextField />
          </div>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </Appbar>
    </div>
  )
}