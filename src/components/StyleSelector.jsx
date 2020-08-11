import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';

const StyleSelector = (props) => {

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
  if (props.styles) {
    styleListItemThumbnails = props.styles.map((style) => {
      return <Avatar key={style.style_id} alt={style.name} src={style.photos[0].thumbnail_url}/>
    })
  }

  return (
    <div>
      <h4>Price</h4>
      <h5><b>Style {'>'}</b>"Selected Style"</h5>
      <h6>{styleListItemThumbnails}</h6>
    </div>
  );
}

export default StyleSelector;