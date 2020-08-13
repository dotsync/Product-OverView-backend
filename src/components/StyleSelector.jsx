import React, {useState, useEffect} from 'react';
import { Typography, Avatar, GridList, GridListTile, Grid, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  grid: {
    display: "flex",
    paddingTop: '7px',
    paddingBottom: "10px",
  },
  price: {
    fontSize: 'small'
  },
  originalPrice: {
    textDecoration: 'line-through',
    fontSize: 'small'
  },
  stylePointer: {
    textTransform: 'uppercase',
    fontSize: 'small'
  },
  gridList: {
    paddingTop: '15px',
  },
  avatar: {
    boxShadow: theme.shadows[3],
  },
  selectionButtons: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const StyleSelector = (props) => {
  const classes = useStyles();

  const [styles, setStyles] = useState(null);
  const [anchorSizeEl, setAnchorSizeEl] = useState(null);
  const [anchorQuantityEl, setAnchorQuantityEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedQuantityIndex, setSelectedQuantityIndex] = useState(null);

  useEffect(() => {
    if (props.styles) {
      props.setSelectedStyle(props.styles[0]);
      setStyles(props.styles);
    }
  }, [props.styles]);

  const handleAvatarClick = (event, index) => {
    props.setSelectedStyle(props.styles[index])
  }

  const handleSelectSizeClick = (event) => {
    setAnchorSizeEl(event.currentTarget);
  }

  const handleSizeClick = (event, index) => {
    setSelectedSize(styleSkus[index].props.children);
    setSelectedSizeIndex(index);
    setAnchorSizeEl(null);
    setSelectedQuantity(1);
    setSelectedQuantityIndex(null);
  }

  const handleQtyButtonClick = (event, index) => {
    setAnchorQuantityEl(event.currentTarget);
  }

  const handleQtyNumberClick = (event, index) => {
    setSelectedQuantityIndex(index + 1);
    setSelectedQuantity(index + 1);
    setAnchorQuantityEl(null);
  }

  const handleSizeClose = () => {
    setAnchorSizeEl(null);
  }

  const handleQuantityClose = () => {
    setAnchorQuantityEl(null);
  }

  let styleListItemThumbnails;
  if (props.styles && props.styles.length !== 0) {
    if (props.styles[0].photos[0].thumbnail_url) {
      styleListItemThumbnails = <GridList cols={4} cellHeight={65} className={classes.gridList}>
        {props.styles.map((tile, index) => {
          return <GridListTile selected={props.selectedStyle === props.styles[index]} key={tile.style_id}>
            <IconButton onClick={(event) => handleAvatarClick(event, index)}>
              <Avatar src={tile.photos[0].thumbnail_url} alt={tile.name} className={classes.avatar}/>
            </IconButton>
          </GridListTile>
        })}
      </GridList>
    } else {
      styleListItemThumbnails = <GridList cols={2} cellHeight={65}className={classes.gridlist}>{props.styles.map((tile, index) => {
        return <GridListTile selected={props.selectedStyle === props.styles[index]} key={tile.style_id}>
          <Button onClick={(event) => handleAvatarClick(event, index)}>
            <Typography key={tile.style_id}>{tile.name}</Typography>
          </Button>
        </GridListTile>
      })}
      </GridList>
    }
  }

  let styleSkus;
  if (props.styles && props.styles.length !== 0) {
    if (props.selectedStyle) {
      const skusArray = Object.keys(props.selectedStyle.skus).map((key) => [key, props.selectedStyle.skus[key]]);
      styleSkus = skusArray.map((sku, index) => {
        return <MenuItem key={index} onClick={(event) => handleSizeClick(event, index)} selected={index === selectedSizeIndex}>{sku[0]}</MenuItem>
      })
    }
  }

  let availableSkus = [];
  let numberOfSkus;
  if (selectedSize) {
    numberOfSkus = Array.from(Array(props.selectedStyle.skus[selectedSize]).keys());
    availableSkus = numberOfSkus.map((index) => {
      // console.log("number", index)
      return <MenuItem key={index} onClick={(event) => handleQtyNumberClick(event, index)} selected={index === selectedQuantityIndex}>{index + 1}</MenuItem>
    })
  }

  return (
    <div>
      {props.selectedStyle ?
        props.selectedStyle.sale_price === "0" ?
          <Grid container spacing={1} className={classes.grid}>
            <Grid item>
              <Typography className={classes.price}>${props.selectedStyle.original_price}</Typography>
            </Grid>
          </Grid>
          :
          <Grid container spacing={1} className={classes.grid}>
            <Grid item>
              <Typography className={classes.originalPrice} id="original-price">${props.selectedStyle.original_price}</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.price} id="sale-price">${props.selectedStyle.sale_price}</Typography>
            </Grid>
          </Grid>
          :
        <Typography>no styles available</Typography>}
      {props.selectedStyle ?
        <Typography className={classes.stylePointer}><b>Style {'> '}</b>{props.selectedStyle.name}</Typography>
        :
        <Typography><b>Style {'> '}</b>no styles available</Typography>}
      {styleListItemThumbnails ?
        <div>{styleListItemThumbnails}</div>
        :
        <div>no thumbnails available</div>}
      <div className={classes.selectionButtons}>
        <div id="select-size">
          {props.selectedStyle ?
              <div>
                <Button
                  aria-controls="size-menu"
                  aria-haspopup="true"
                  onClick={handleSelectSizeClick}
                  endIcon={<ArrowDropDownIcon />}
                  >
                {selectedSizeIndex || selectedSizeIndex === 0 ?
                  <span>{styleSkus[selectedSizeIndex].props.children}</span> :
                  <span>Select Size</span>}
                </Button>
                <Menu
                id="size-menu"
                anchorEl={anchorSizeEl}
                keepMounted
                open={Boolean(anchorSizeEl)}
                onClose={handleSizeClose}
                getContentAnchorEl={null}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
                >{styleSkus}</Menu>
              </div>
            :
            <div>no sizes to select</div>
          }
        </div>
        <div id="select-quantity">
          {selectedSize ?
            <div>
            <Button
              aria-controls="quantity-menu"
              aria-haspopup="true"
              onClick={handleQtyButtonClick}
              endIcon={<ArrowDropDownIcon />}
              >
              {selectedQuantity ?
                <span>Qty: {selectedQuantity}</span> :
                <span>Qty</span>
              }
              </Button>
              <Menu
              id="quantity-menu"
              anchorEl={anchorQuantityEl}
              keepMounted
              open={Boolean(anchorQuantityEl)}
              onClose={handleQuantityClose}
              getContentAnchorEl={null}
              anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
              transformOrigin={{vertical: 'top', horizontal: 'center'}}
              >{availableSkus}</Menu>
            </div>
            :
            <span></span>
          }
        </div>
      </div>
    </div>
  );
}

export default StyleSelector;
