import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ContactUs from "./components/ContactUs";

import Product from "./components/Product";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/Product" component={Product} />
            <Route exact path="/Cart" component={Cart} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
