import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useParams } from "react-router-dom";
import axios from 'axios';

import Header from './Header.jsx';
import Announcement from './Announcement.jsx';
import Images from './Images.jsx';
import Reviews from './Reviews.jsx';
import Name from './Name.jsx';
import StyleSelector from './StyleSelector.jsx';
import Description from './Description.jsx';
import Details from './Details.jsx';


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

const App = (props) => {

  let productId;
  const classes = useStyles();
  // const [productId, setProductId] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [styles, setStyles] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);

  useEffect(() => {
    if (props.productId) {
      productId = props.productId;
    } else {
      productId = 1;
    }

    Promise.all([
      axios.get(`http://52.26.193.201:3000/reviews/${productId}/meta`),
      axios.get(`http://52.26.193.201:3000/products/${productId}`),
      axios.get(`http://52.26.193.201:3000/products/${productId}/styles`)
  ])
    .then(([resReviews, resProduct, resStyles]) => {
      setRatings(resReviews.data.ratings);
      setCurrentProduct(resProduct.data);
      setStyles(resStyles.data.results);
    })
    .catch((err) => {console.log("axios get error: ", err)});
  }, [productId])

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Header id="header"/>
      </Grid>
      <Grid item xs={12}>
        <Announcement id="announcement"/>
      </Grid>
      <Grid container item xs={12} className={classes.body}>
        <Grid item xs={7}>
          <Images selectedStyle={selectedStyle} id="images"/>
        </Grid>
        <Grid container className={classes.details} item xs={4}>
          <Grid item xs={12} className={classes.reviews}>
            <Reviews productId={productId} ratings={ratings} id="reviews"/>
          </Grid>
          <Grid item xs={12}>
            <Name currentProduct={currentProduct} id="name"/>
          </Grid>
          <Grid item xs={12}>
            <StyleSelector styles={styles} currentProduct={currentProduct} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} id="styleSelector"/>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={7}>
            <div className={classes.description}>
              <Description currentProduct={currentProduct} id="description"/>
            </div>
          </Grid>
          <Grid item xs={5}>
            <Details currentProduct={currentProduct} id="details"/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App;