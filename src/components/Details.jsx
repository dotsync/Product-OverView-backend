import React from 'react';

const Details = (props) => {

  let featureListItems;
  if (props.currentProduct) {
    const details = props.currentProduct.features;
    featureListItems = details.map((feature) => {
      if (feature.value === "null") {
        return <div key={feature.feature}>{feature.feature}</div>
      }
      return <div key={feature.feature}>{feature.feature} -- {feature.value}</div>
    })
  }

  return (
    <div id="features">
      {props.currentProduct ?
        <div>
          {featureListItems}
        </div>
        : <span>no current features</span>
      }
    </div>
  );
}

export default Details;