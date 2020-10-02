import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Signin} />
    </Router>
  );
}

export default App;
