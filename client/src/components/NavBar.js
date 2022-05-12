import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div>
                <Link to="/home" className="nav" >Home</Link>

                <Link to="/profile" className="nav" >Profile</Link>

                <Link to="/cart" className="nav" >Cart</Link>
            </div></>
    )
}

export default NavBar;