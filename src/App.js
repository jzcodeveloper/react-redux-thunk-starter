import React from "react";
import { Switch, Route } from "react-router-dom";

import { Movies } from "./containers/movies";
import { Movie } from "./containers/movie";

const App = () => {
  return (
    <Switch>
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/movies/:id" component={Movie} />
    </Switch>
  );
};

export default App;
