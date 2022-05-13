
import React, {useState, useEffect} from "react";
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
  const [donutShopInfo, setDonutShopInfo] = useState([])
  const [currentShop, setCurrentShop] = useState(0)

  function switchToSignup(){
    setLoginOrSignup(!loginOrSignup)
  }

  useEffect(() => {
    fetch('http://localhost:3000/donutShops')
        .then(resp => resp.json())
        .then(setDonutShopInfo)
  },[])

  function currentShopFunc(index){
    setCurrentShop(index)
  }

  

  return (
    <>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home currentShop={currentShopFunc}/>
      </Route>
      <Route exact path="/shop">
        <Shop donutShopInfo={donutShopInfo} currentShop={currentShop} />
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
