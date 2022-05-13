
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

  const [loginOrSignup, setLoginOrSignup] = useState(true)
  const [donutShopInfo, setDonutShopInfo] = useState([])
  const [currentShop, setCurrentShop] = useState(0)
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  function switchToSignup(){
    setLoginOrSignup(!loginOrSignup)
  }

  function checkIfLoggedIn(data){
    
    setUser(data)
    setLoggedIn(!loggedIn)
  }

  useEffect(() => {
    fetch('http://localhost:3000/donutShops')
        .then(resp => resp.json())
        .then(setDonutShopInfo)
  },[])

  function currentShopFunc(index){
    setCurrentShop(index)
  }

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json()
        .then((user) => console.log(user));
      }
    });
  }, [user]);

  

  return (
    <>
      {loggedIn ?<NavBar loggedIn={loggedIn}  />: undefined}
      <Route exact path="/">
        {loggedIn ? <Home currentShop={currentShopFunc}/> :(loginOrSignup ? <Login switchToSignup={switchToSignup} setUser={setUser} checkIfLoggedIn={checkIfLoggedIn} /> : <Signup  switchToSignup={switchToSignup} checkIfLoggedIn={checkIfLoggedIn} />) }
      </Route>
      <Route exact path="/shop">
        <Shop donutShopInfo={donutShopInfo} currentShop={currentShop} user={user} />
      </Route>
      <Route exact path="/cart">
        <Cart user={user}/>
      </Route>
      <Route exact path="/profile">
        <Profile user={user} setLoggedIn={setLoggedIn} />
      </Route>
      <Route exact path="/login">
        {loginOrSignup ? <Login switchToSignup={switchToSignup} setUser={setUser} checkIfLoggedIn={checkIfLoggedIn} /> : <Signup  switchToSignup={switchToSignup} checkIfLoggedIn={checkIfLoggedIn} /> }
      </Route>

    </>
  );
}

export default App;
