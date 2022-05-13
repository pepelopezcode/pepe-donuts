
import React, {useState} from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import Shop from './DonuyShop/Shop'
import Profile from "./Profile"
import Cart from "./Cart"
import Login from "./Login.js";
import Signup from "./Signup.js";



function App() {

  const [loginOrSignup, setLoginOrSignup] = useState(false)

  function switchToSignup(){
    setLoginOrSignup(!loginOrSignup)
  }

  

  return (
    <>
      <NavBar />
      <Route exact path="/">
        <Home />
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
      <Route exact path="/login">
        {loginOrSignup ? <Login switchToSignup={switchToSignup} /> : <Signup  switchToSignup={switchToSignup}/> }
      </Route>

    </>
  );
}

export default App;
