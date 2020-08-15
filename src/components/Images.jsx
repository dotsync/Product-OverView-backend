import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageSlider from './ImageSlider.jsx';

const useStyles = makeStyles((theme) => ({
  fill: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // maxHeight: "500px"
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
        <ImageSlider images={imageUrls} thumbnails={thumbnailUrls}/>
        :
        <span>no images available</span>
      }
    </div>
  );
}

export default Images;