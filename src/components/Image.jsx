import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        overflow: 'hidden',
        alignSelf: 'center'
    },
});

const Image = (props) => {
    const {src, currentImage} = props;

    const classes = useStyles(props);
    return <div key={currentImage} className={classes.root}>
            {src ?
                <img className={classes.img} src={src} alt="image" id="image"/> :
                <span id="noImage">Image source unavailable. Look left for another thumbnail to click. If no thumbnails are available, this style/product has no images. Look right for verbal descriptions of styles.</span>}
    </div>;
};

export default Image;