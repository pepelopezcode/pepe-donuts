import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div>
                <Link to="/home">Home</Link>

                <Link to="/profile">Cart</Link>

                <Link to="/cart">Profile</Link>
            </div></>
    )
}

export default NavBar;