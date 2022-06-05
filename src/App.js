import {HashRouter, Route, Switch, Redirect } from "react-router-dom";

//Pages
import Index from "./pages/index";
import Java  from "./pages/java";
import Python from "./pages/python";
import Javascript from "./pages/typescript";
import Others from "./pages/others";
import Cpp from "./pages/cpp";

const App = () =>{
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/index" component={Index}/>
        <Route exact path="/java" component={Java}/>
        <Route exact path="/python" component={Python}/>
        <Route exact path="/javascript" component={Javascript}/>
        <Route exact path="/cpp" component={Cpp}/>
        <Route exact path="/others" component={Others}/>
        <Redirect to={"/"}/>
      </Switch>
    </HashRouter>
  )
}

export default App;
