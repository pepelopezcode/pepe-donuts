import React from "react";
import { Link } from "react-router-dom";

function NavBar({loggedIn}) {
    console.log(loggedIn)
    return (
        <>
            <div>
                <Link to="/" className="nav" >Home</Link>

                {loggedIn ?<Link to="/profile" className="nav" >Profile</Link>:<Link to="/login" className="nav" >Login</Link>}

                <Link to="/cart" className="nav" >Cart</Link>
                
            </div></>
    )
}

export default NavBar;