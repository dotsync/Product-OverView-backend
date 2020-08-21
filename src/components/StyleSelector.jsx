import React, { useState, useEffect } from 'react';
import { Typography, Avatar, GridList, GridListTile, Grid, IconButton, Button, Menu, MenuItem, Tooltip } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

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
    justifyContent: 'space-between',
    paddingBottom: '10px'
  },
  buttonWrappers: {
    display: 'flex',
    border: "1px solid",
    justifyContent: "center",
  },
  shareContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  shareText: {
    display: 'flex',
    justifyContent: "center",
    textTransform: "uppercase",
    fontSize: 'large',
    alignSelf: 'center'
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  selectSize: {
    width: 'auto'
  },
  notAllowed: {
    cursor: 'not-allowed'
  }
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const StyleSelector = (props) => {
  const classes = useStyles();

  const [styles, setStyles] = useState(null);
  const [anchorSizeEl, setAnchorSizeEl] = useState(null);
  const [anchorQuantityEl, setAnchorQuantityEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedQuantityIndex, setSelectedQuantityIndex] = useState(null);
  const [warning, setWarning] = useState('Select Size above to add to checkout bag');

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
    setWarning('');
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

  const handleWarningClick = () => {
    alert("Please select a size to add to your shopping bag.")
  }

  const handleAddToBagClick = () => {
    alert(`You selected ${selectedQuantity} of ${props.currentProduct.name}, style ${props.selectedStyle.name}, size ${selectedSize}. Your total is $${props.selectedStyle.sale_price === "0" ? selectedQuantity * props.selectedStyle.original_price : selectedQuantity * props.selectedStyle.sale_price}`)
  }

  let styleListItemThumbnails;
  if (props.styles && props.styles.length !== 0) {
    if (props.styles[0].photos[0].thumbnail_url) {
      styleListItemThumbnails = <GridList cols={4} cellHeight={65} className={classes.gridList}>
        {props.styles.map((tile, index) => {
          return <GridListTile selected={props.selectedStyle === props.styles[index]} key={tile.style_id}>
            <IconButton id="avatarButton" onClick={(event) => handleAvatarClick(event, index)}>
              <Avatar src={tile.photos[0].thumbnail_url} alt={tile.name} className={classes.avatar} />
            </IconButton>
          </GridListTile>
        })}
      </GridList>
    } else {
      styleListItemThumbnails = <GridList cols={2} cellHeight={65} className={classes.gridlist}>{props.styles.map((tile, index) => {
        return <GridListTile selected={props.selectedStyle === props.styles[index]} key={tile.style_id}>
          <Button id="imagelessAvatarButton" onClick={(event) => handleAvatarClick(event, index)}>
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

      if (parseFloat(styleSkus[0].props.children)) {
        let floats = [];
        for(let i = 0; i < styleSkus.length; i++) {
          floats.push(parseFloat(styleSkus[i].props.children));
        }
        floats.sort((a,b) => a - b);
        styleSkus = floats.map((float, index) => {
          return <MenuItem key={index} onClick={(event) => handleSizeClick(event, index)} selected={index === selectedSizeIndex}>{float.toString()}</MenuItem>
        })
      }
    }
  }

  let availableSkus = [];
  let numberOfSkus;
  if (selectedSize) {
    numberOfSkus = Array.from(Array(props.selectedStyle.skus[selectedSize]).keys());
    availableSkus = numberOfSkus.map((index) => {
      return <MenuItem key={index} onClick={(event) => handleQtyNumberClick(event, index)} selected={index === selectedQuantityIndex}>{index + 1}</MenuItem>
    })
  }

  return (
    <div>
      {props.selectedStyle ?
        props.selectedStyle.sale_price === "0" ?
          <Grid container spacing={1} className={classes.grid} >
            <Grid item>
              <Typography className={classes.price} id="noSalePrice">${props.selectedStyle.original_price}</Typography>
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
      <Grid container spacing={2} className={classes.selectionButtons} id="buttonsContainer">
        <Grid item xs={8} id="select-size">
          {props.selectedStyle ?
            <Grid item xs={12} className={classes.buttonWrappers}>
              <Button
                id='selectSize'
                aria-controls="size-menu"
                aria-haspopup="true"
                onClick={handleSelectSizeClick}
                endIcon={<ArrowDropDownIcon />}
                className={classes.buttons}
                fullWidth
              >
                {selectedSizeIndex || selectedSizeIndex === 0 ?
                  <span>Size: {styleSkus[selectedSizeIndex].props.children}</span> :
                  <span>Select Size</span>}
              </Button>
              <Menu
                id="size-menu"
                anchorEl={anchorSizeEl}
                keepMounted
                open={Boolean(anchorSizeEl)}
                onClose={handleSizeClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              >{styleSkus}</Menu>
            </Grid>
            :
            <div>no sizes to select</div>
          }
        </Grid>
        <Grid item xs={4} id="select-quantity">
          {selectedSize ?
            <Grid item xs={12} className={classes.buttonWrappers}>
              <Button
                id='quantityButton'
                aria-controls="quantity-menu"
                aria-haspopup="true"
                onClick={handleQtyButtonClick}
                endIcon={<ArrowDropDownIcon />}
                className={classes.buttons}
                fullWidth
              >
                {selectedQuantity ?
                  <span >Qty: {selectedQuantity}</span> :
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
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              >{availableSkus}</Menu>
            </Grid>
            :
            <Grid item xs={4}></Grid>
          }
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12} className={classes.buttonWrappers}>
            <LightTooltip title={warning === '' ? '' : warning} placement="left">
              <Button
                id="addToBagButton"
                fullWidth
                className={warning === '' ? '' : classes.notAllowed}
                onClick={warning === '' ? handleAddToBagClick : handleWarningClick}
              >Add to Bag</Button>
            </LightTooltip>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.shareContainer}>
          <Grid item xs={3} className={classes.shareText}>
            <Typography>
              Share
            </Typography>
          </Grid>
          <Grid item xs={9} className={classes.icons}>
            <IconButton>
              <EmailIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <PinterestIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default StyleSelector;
