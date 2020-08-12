import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MuiImageSlider from 'mui-image-slider';

const useStyles = makeStyles((theme) => ({
  fill: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    maxHeight: "500px"
  },
  paperContainer: {
    backgroundColor: 'blue',
  }
}));


const Images = ({selectedStyle}) => {
  const classes = useStyles();

  let imageUrls = [];
  if (selectedStyle) {
    selectedStyle.photos.map((photo) => {
      imageUrls.push(photo.url)
    })
  }

  return (
    <div className={classes.fill}>
      {selectedStyle ?
        <MuiImageSlider images={imageUrls} />
        :
        <span>no images available</span>
      }
    </div>
  );
}

export default Images;