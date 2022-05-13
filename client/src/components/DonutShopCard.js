import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function DonutShopCard({currentShop}) {

    

    return (
        <>
            <main>
                
                <Link to="/shop" className="card" onClick={() => currentShop(0)} >
                    <div className="inner">
                        <h2 className="title">The Donut Stop</h2>
                        
                        <h3 className="subtitle">Rating</h3>
                    </div>

                </Link>

                <Link to="/shop" className="card card3" onClick={() => currentShop(1)} >
                    <div className="inner">
                        <h2 className="title">DoDoDonuts</h2>
                        
                        <h3 className="subtitle">Rating</h3>
                    </div>

                </Link>

                <Link to="/shop" className="card card2" onClick={() => currentShop(2)} >
                    <div className="inner">
                        <h2 className="title">Not Yo Donuts</h2>
                        
                        <h3 className="subtitle">Rating</h3>
                    </div>

                </Link>

                
            </main>
        </>
    )
}

export default DonutShopCard;