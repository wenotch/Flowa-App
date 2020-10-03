import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Ama from "./pages/Ama/Ama";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Signin} />
      <Route path="/home" component={Home} />
      <Route path="/account" component={Account} />
      <Route path="/amaryllis" component={Ama} />
    </Router>
  );
}

export default App;
