import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageSlider from './ImageSlider.jsx';

const useStyles = makeStyles((theme) => ({
  fill: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  paperContainer: {
    backgroundColor: 'blue',
  }
}));


const Images = ({selectedStyle}) => {
  const classes = useStyles();

  let imageUrls = [];
  let thumbnailUrls = [];
  if (selectedStyle) {
    selectedStyle.photos.map((photo) => {
      imageUrls.push(photo.url);
      thumbnailUrls.push(photo.thumbnail_url)
    })
  }

  return (
    <div className={classes.fill}>
      {selectedStyle ?
        <ImageSlider images={imageUrls} thumbnails={thumbnailUrls} id="imageSlider"/>
        :
        <span id="noImages">no images available</span>
      }
    </div>
  );
}

export default Images;