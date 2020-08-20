import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App.jsx";

const AppContainer = () => {
  return (
      <Switch>
        <Route exact path='/' component={App} />
        <Route
          path='/products/:productId'
          render={props => {
            const { productId } = props.match.params || {productId: undefined};
            return ( <App productId={productId}/>)
          }} />
      </Switch>
  );
};

export default AppContainer;