import React, { Component } from "react";

import {HashRouter, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Index from "./pages/index";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index}/>
          <Redirect to={"/"}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
