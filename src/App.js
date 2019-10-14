import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
//Components
import NavBar from "./components/NavBar";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signUp from "./pages/signUp";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#c483de",
      main: "#b665d6",
      dark: "#7f4695",
      contrastText: "#fff"
    },
    secondary: {
      light: "#83deda",
      main: "#65d6d1",
      dark: "#469592",
      contrastText: "#fff"
      ,
    },
    typography: {
      useNextVariants: true
    }
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
}

export default App;
