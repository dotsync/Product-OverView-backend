import React, {useState, useEffect} from 'react';
import { Typography, Avatar, GridList, GridListTile, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    paddingTop: '7px',
    paddingBottom: "10px"
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
}));

const StyleSelector = (props) => {
  const classes = useStyles();

  console.log("styles props: ", props)


  const [selectedStyle, setSelectedStyle] = useState(null);
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    if (props.styles) {
      setSelectedStyle(props.styles[0]);
      setStyles(props.styles);
    }

  });

  let styleListItemThumbnails;
  if (props.styles && props.styles.length !== 0) {
    if (props.styles[0].photos[0].thumbnail_url) {
      styleListItemThumbnails = <GridList cols={4} cellHeight={60} className={classes.gridList}>
        {props.styles.map((tile) => {
          return <GridListTile key={tile.style_id}>
            <Avatar src={tile.photos[0].thumbnail_url} alt={tile.name}/>
          </GridListTile>
        })}
      </GridList>
    } else {
      styleListItemThumbnails = props.styles.map((style) => {
      return <Typography key={style.style_id}>{style.name}</Typography>
      })
    }
  }

  return (
    <div>
      {selectedStyle ?
        selectedStyle.sale_price === "0" ?
          <Grid container spacing={1} className={classes.grid}>
            <Grid item>
              <Typography className={classes.price}>${selectedStyle.original_price}</Typography>
            </Grid>
          </Grid>
          :
          <Grid container spacing={1} className={classes.grid}>
            <Grid item>
              <Typography className={classes.originalPrice}>${selectedStyle.original_price}</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.price}>${selectedStyle.sale_price}</Typography>
            </Grid>
          </Grid>
          :
        <Typography>no styles available</Typography>}
      {selectedStyle ?
        <Typography className={classes.stylePointer}><b>Style {'> '}</b>{selectedStyle.name}</Typography>
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