import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {GridList, GridListTile, Button, Grid, IconButton} from '@material-ui/core';
import Image from './Image.jsx';
import ArrowButton from "./ArrowButton.jsx";
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const useStyles = makeStyles({
  root: {
      position: 'relative',
      width: 500,
      height: ({fitToImageHeight}) => !fitToImageHeight && 500,
  },
  wrapper: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      display: 'flex',
  },
  imageSlider: {
    display: 'flex',
  },
  arrowWrapper: {},
  img: {
    // cursor: 'zoom-in',
    alignSelf: 'center'
  },
  gridList: {
    maxHeight: '500px',
    width: '110px',
    justifyContent: 'space-between',
    overflow: 'auto'
  },
  button: {
    maxHeight: '90px'
  },
  thumbnails: {
    // overflow: 'hidden'
  },
  tile: {
    height: '90px',
    width: '90px',
    '&:hover': {
      border: 'solid 1px',
      borderColor: 'white',
  },
  padding: '5px',
  },
  fullScreenButtonHidden: {
    position: 'absolute',
    top: 10,
    right: 0,
    height: '10px',
    zIndex: '101',
    color: 'white',
    opacity: 100,
    visibility: 'hidden',
  },
  fullScreenButtonVisible: {
    position: 'absolute',
    top: 10,
    right: 0,
    height: '10px',
    zIndex: '101',
    color: 'white',
    opacity: 100,
  },
});

const ImageSlider = props => {
  const {images, thumbnails, CustomArrow, onArrowClick, autoPlay} = props;

  if (!images || !images.length) {
      throw new Error('images prop is required and cannot be empty.');
  }

  let defaultOptions = {
      arrows: true,
      arrowsColor: 'white',
      arrowsBgColor: 'transparent',
      arrowsBgHoverColor: 'transparent',
      alwaysShowArrows: false,
      fitToImageHeight: true,
  };
  let options = Object.assign({}, defaultOptions, props);

  const {arrows} = options;

  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState('left');
  const [mouseOver, setMouseOver] = useState(false);

  const getNextImage = () => (currentImage + 1) % images.length;
  const getPrevImage = () => (currentImage ? currentImage : images.length) - 1;

  const handleNextImageClick = () => {
      setDirection('left');
      let nextImage = getNextImage();
      setCurrentImage(nextImage);
      if (onArrowClick) {
          onArrowClick(nextImage);
      }
  };

  const handlePrevImageClick = () => {
      setDirection('right');
      let prevImage = getPrevImage();
      setCurrentImage(prevImage);
      if (onArrowClick) {
          onArrowClick(prevImage);
      }
  };

  const handleThumbnailMouseEnter = (event, index) => {
    setCurrentImage(index);
  }

  // const handleImageClick = (event) => {
  //   console.log("image click");
  // }

  const showButtons = arrows && images.length > 1;

  const classes = useStyles(options);

  const thumbnailTiles = thumbnails.map((tile, index) => {
    return <Button
      key={index}
      onMouseEnter={(event) => handleThumbnailMouseEnter(event, index)}
      className={classes.button}
      fullWidth>
        <GridListTile className={classes.tile}>
          <img src={tile} className={classes.thumbnails}/>
         </GridListTile>
      </Button>
  })

  return (
      <Grid container className={classes.imageSlider}>
        <Grid item xs={2}>
          <GridList cols={1} className={classes.gridList}>
            {thumbnailTiles}
          </GridList>
        </Grid>
        <Grid item xs={10}>
          <div className={classes.root}
              onMouseOver={() => showButtons && setMouseOver(true)}
              onMouseOut={() => setMouseOver(false)}>
            <div className={classes.wrapper}>
                {showButtons && <ArrowButton left
                                        {...options}
                                        showArrows={mouseOver}
                                        onButtonClick={handlePrevImageClick}
                                        classes={{root: classes.arrowWrapper}}
                                        CustomArrow={CustomArrow}/>}

                <Image
                  currentImage={currentImage}
                  src={images[currentImage]}
                  direction={direction}
                  classes={{img: classes.img}}/>
                {showButtons && <ArrowButton right
                                        {...options}
                                        showArrows={mouseOver}
                                        onButtonClick={handleNextImageClick}
                                        classes={{root: classes.arrowWrapper}}
                                          CustomArrow={CustomArrow}/>}
                {showButtons && <IconButton
                                  className={mouseOver ? classes.fullScreenButtonVisible : classes.fullScreenButtonHidden}>
                                  <FullscreenIcon />
                                </IconButton>}
            </div>
          </div>
        </Grid>
      </Grid>
  );
};

export default ImageSlider;