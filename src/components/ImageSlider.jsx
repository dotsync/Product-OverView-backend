import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {GridList, GridListTile, Button, Zoom} from '@material-ui/core';
import Image from './Image.jsx';
import ArrowButton from "./ArrowButton.jsx";

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
  },
  imageSlider: {
    display: 'flex',
  },
  arrowWrapper: {},
  img: {
    cursor: 'zoom-in'
  },
  gridList: {
    maxHeight: '500px',
    width: '100px',
  },
  button: {
    maxHeight: '100px'
  },
  thumbnails: {
    height: '100px'
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
      alwaysShowArrows: true,
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

  const handleThumbnailClick = (event, index) => {
    setCurrentImage(index);
  }

  const handleImageClick = (event) => {
    console.log("image click");
  }

  const showButtons = arrows && images.length > 1;

  const classes = useStyles(options);

  const thumbnailTiles = thumbnails.map((tile, index) => {
    return <Button
      key={index}
      onClick={(event) => handleThumbnailClick(event, index)}
      className={classes.button}
      fullWidth>
        <GridListTile  className={classes.tile}>
          <img src={tile} className={classes.thumbnails}/>
         </GridListTile>
      </Button>
  })

  return (
      <div className={classes.imageSlider}>


          <GridList cols={1} spacing={1} className={classes.gridList}>{thumbnailTiles}</GridList>
          <div className={classes.root}
              //  onMouseOver={() => showButtons && setMouseOver(true)}
              //  onMouseOut={() => setMouseOver(false)}
               >
            <div onClick={handleImageClick} className={classes.wrapper}>
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

            </div>
          </div>
      </div>
  );
};

export default ImageSlider;