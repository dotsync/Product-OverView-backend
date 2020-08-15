import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Header from './Header.jsx';
import Announcement from './Announcement.jsx';
import Images from './Images.jsx';
import Reviews from './Reviews.jsx';
import Name from './Name.jsx';
import StyleSelector from './StyleSelector.jsx';
import Description from './Description.jsx';
import Details from './Details.jsx';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px',
    padding: '0px',
    display: 'flex',
    justifyContent: 'center'
  },
  details: {
    marginLeft: '20px'
  },
  reviews: {
    marginTop: "10px",
    marginBottom: "10px"
  },
  description: {
    marginLeft: "50px",
    marginTop: "20px"
  },
  body: {
    maxWidth: "85.375em",
  }
}));

const App = () => {
  const classes = useStyles();
  const [productId, setProductId] = useState(8);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [styles, setStyles] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get(`http://18.224.200.47/reviews/${productId}/meta`),
      axios.get(`http://18.224.200.47/products/${productId}`),
      axios.get(`http://18.224.200.47/products/${productId}/styles`)
  ])
    .then(([resReviews, resProduct, resStyles]) => {
      setRatings(resReviews.data.ratings);
      setCurrentProduct(resProduct.data);
      setStyles(resStyles.data.results);
    })
    .catch((err) => {console.log("axios get error: ", err)});
  }, [])

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Announcement />
      </Grid>
      <Grid container item xs={12} className={classes.body}>
        <Grid item xs={7}>
          <Images selectedStyle={selectedStyle}/>
        </Grid>
        <Grid container className={classes.details} item xs={4}>
          <Grid item xs={12} className={classes.reviews}>
            <Reviews productId={productId} ratings={ratings}/>
          </Grid>
          <Grid item xs={12}>
            <Name currentProduct={currentProduct}/>
          </Grid>
          <Grid item xs={12}>
            <StyleSelector styles={styles} currentProduct={currentProduct} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle}/>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={7}>
            <div className={classes.description}>
              <Description currentProduct={currentProduct} />
            </div>
          </Grid>
          <Grid item xs={5}>
            <Details currentProduct={currentProduct}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App;