import React, {useState, useEffect} from 'react';
import { Typography, Avatar, GridList, GridListTile, Grid, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const StyleSelector = (props) => {
  const classes = useStyles();

  // console.log("styles props: ", props)

  const [styles, setStyles] = useState(null);

  useEffect(() => {
    if (props.styles) {
      props.setSelectedStyle(props.styles[0]);
      setStyles(props.styles);
    }
  }, [props.styles]);

  const handleListItemClick = (event, index) => {
    props.setSelectedStyle(props.styles[index])
  }

  let styleListItemThumbnails;
  if (props.styles && props.styles.length !== 0) {
    if (props.styles[0].photos[0].thumbnail_url) {
      styleListItemThumbnails = <GridList cols={4} cellHeight={65} className={classes.gridList}>
        {props.styles.map((tile, index) => {
          return <GridListTile selected={props.selectedStyle === props.styles[index]} key={tile.style_id}>
            <IconButton onClick={(event) => handleListItemClick(event, index)}>
              <Avatar src={tile.photos[0].thumbnail_url} alt={tile.name} className={classes.avatar}/>
            </IconButton>
          </GridListTile>
        })}
      </GridList>
    } else {
      styleListItemThumbnails = <GridList cols={2} cellHeight={65}className={classes.gridlist}>{props.styles.map((tile, index) => {
        return <GridListTile selected={props.selectedStyle === props.styles[index]} key={tile.style_id}>
          <Button onClick={(event) => handleListItemClick(event, index)}>
            <Typography key={tile.style_id}>{tile.name}</Typography>
          </Button>
        </GridListTile>
      })}
      </GridList>
    }
  }

  // console.log("selected style: ", props.selectedStyle)

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
    </div>
  );
}

export default StyleSelector;