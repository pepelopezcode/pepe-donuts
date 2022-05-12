import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function DonutShopCard() {
    const [donutShopInfo, setDonutShopInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/donutShops')
        .then(resp => resp.json())
        .then(setDonutShopInfo)
    },[])
    console.log(donutShopInfo)

    return (
        <>
            <main>
                
                <Link to="/shop" className="card">
                    <div className="inner">
                        <h2 className="title">The Donut Stop</h2>
                        
                        <h3 className="subtitle">Rating</h3>
                    </div>

                </Link>

                <Link to="/shop" className="card card3">
                    <div className="inner">
                        <h2 className="title">Davids Donuts</h2>
                        
                        <h3 className="subtitle">Rating</h3>
                    </div>

                </Link>

                <Link to="/shop" className="card card2">
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