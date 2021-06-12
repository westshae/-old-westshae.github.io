import React, { Component } from "react";

import {HashRouter, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Index from "./pages/index";
import Projects from "./pages/projects"
import Contact from "./pages/contact"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect component={"/index"}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
