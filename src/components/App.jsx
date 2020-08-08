import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import randomColor from 'randomcolor';
import Header from './Header.jsx';
import Announcement from './Announcement.jsx';
import Images from './Images.jsx';


const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={12} style={{background:randomColor()}}>
        <Header />
      </Grid>
      <Grid item xs={12} style={{background:randomColor()}}>
        <Announcement />
      </Grid>
      <Grid item xs={7} style={{background:randomColor()}}>
        <Images />
      </Grid>
      <Grid container item xs={5} style={{background:randomColor()}}>
        <Grid item xs={12} style={{background:randomColor()}}>
          nested reviews item
        </Grid>
        <Grid item xs={12} style={{background:randomColor()}}>
          nested name item
        </Grid>
        <Grid item xs={12} style={{background:randomColor()}}>
          nested style selector item
        </Grid>
        <Grid item xs={12} style={{background:randomColor()}}>
          nested add to cart item
        </Grid>
        <Grid item xs={12} style={{background:randomColor()}}>
          nested share item
        </Grid>
      </Grid>
      <Grid container item xs={12} style={{background:randomColor()}}>
        <Grid item xs={7} style={{background:randomColor()}}>
          Description
        </Grid>
        <Grid item xs={5} style={{background:randomColor()}}>
          Details
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App;