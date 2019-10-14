import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import NavBar from "./components/NavBar";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signUp from "./pages/signUp";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
