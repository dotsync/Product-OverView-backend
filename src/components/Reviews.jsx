import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';

const Reviews = (props) => {
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/${props.productId}/meta`)
    .then((response) => {setRatings(response.data.ratings)});
  }, [])

  function objectValueSum(obj) {
    return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
  }

  function totalStarsSum(obj) {
    let total = 0;

    for (let el in obj) {
      total += parseFloat(el) * obj[el];
    }

    return total;
  }

  let averageRating = totalStarsSum(ratings) / objectValueSum(ratings);

  return (
    <div id="reviews">
      <Rating
        name="read-only"
        id="rating-component"
        value={averageRating}
        readOnly
        precision={0.25}
        size="small"
      />
    </div>
  );
}

export default Reviews;