import React from "react";
import Countries from "./components/Countries";
import Home from "./components/Home";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


function App() {

  return (
    <div id="app">
      <HashRouter>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/countries" component={Countries} />
        </div>
      </HashRouter>

    </div>
  );
}

export default App;
