import React, { Component } from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./context/auth";
import "./scss/style.scss";
import Login from "./views/Login";
import SignUp from "./views/Sign-up";
import { AuthRoute, ProtectedRoute } from "./components/AuthRoute";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./views/Content/Article";
import Draft from "./views/Content/Draft";
import { MyAuthors } from "./views/Content/MyAuthors";
import { theme } from "./Theme";
import { ThemeProvider } from "@material-ui/styles";
import { CircularProgress, Container } from "@material-ui/core";
import Company from "./views/Company/Company";
// const Company = React.lazy(() => import("./views/Company/Company"));
export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <React.Suspense fallback={CircularProgress}>
              <Navbar />
              <div
                style={{
                  backgroundColor: theme.palette.background.default,
                  paddingBottom: theme.spacing(8),
                }}
              >
                <Route exact path="/" component={Home} />
                <Route path="/company/:companyId" component={Company} />
                <Route path="/article/:articleId" component={Article} />
                <ProtectedRoute path="/draft/:draftId" component={Draft} />
                <ProtectedRoute
                  exact
                  path="/MyAuthers/:username/"
                  component={MyAuthors}
                />
                <AuthRoute exact path="/Signup" component={SignUp} />

                <AuthRoute exact path="/Login" component={Login} />
              </div>
              <Footer />
            </React.Suspense>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    );
  }
}

export default App;
