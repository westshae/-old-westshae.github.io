import React, { Component } from "react";

import {HashRouter, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Index from "./pages/index";
import NotFound from "./pages/notfound"
import Programming from "./pages/programming"
import Writing from "./pages/writing"
import Contact from "./pages/contact"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index}/>
          <Route exact path="/404" component={NotFound}/>
          <Route exact path="/programming" component={Programming}/>
          <Route exact path="/writing" component={Writing}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
//<Redirect to="/404" />