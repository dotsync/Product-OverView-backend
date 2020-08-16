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
                <span id="noImage">Image source temporarily unavailable. Select another thumbnail.</span>}
    </div>;
};

export default Image;