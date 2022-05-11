
import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import Shop from './DonuyShop/Shop'
import Profile from "./Profile"
import Cart from "./Cart"



function App() {
  return (
    <>
      <NavBar />

      <Route exact path="/" >

      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>

    </>
  );
}

export default App;
