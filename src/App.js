import React, { Component } from "react";

import { BrowserRouter as Router, HashRouter, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Index from "./pages/index";
import NotFound from "./pages/notfound"
import Portfolio from "./pages/portfolio"
import Blog from "./pages/blog"
import Contact from "./pages/contact"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index}/>
          <Route exact path="/404" component={NotFound}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
//<Redirect to="/404" />