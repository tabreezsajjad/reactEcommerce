import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Switch } from 'react-router-dom';
import Navigation from "./components/topNavigation";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PLPMenu from "./components/PLPMenu";
import PDP from "./components/PDP";
import Home from "./components/Home";





class Main extends Component {


  render() {


    return (
      <div>


        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Apparel/Girls/Category/:id" component={PLPMenu} /> 
          <Route path="/Apparel/Girls/Product/:id" component={PDP} />
          <Route path="/Banner" component={Banner} />
          <Route path="/Footer" component={Footer} />
        </Switch>


      </div>

    )

  }


}

export default Main;