import React from "react";
import { Link } from "react-router-dom";

function DonutShopCard() {
    return (
        <>
            <main>
                <Link to="/shop" className="card">
                    <div className="inner">
                        <h2 className="title">pepe donuts</h2>
                        
                        <h3 className="subtitle">Rating</h3>
                    </div>

                </Link>

                <a href="https://google.com" className="card card2">
                    <div className="inner">
                        <h2 className="title">Mit 117 Sachen durch Klugheimschen Basaltgebirge</h2>
                        <time className="subtitle">03. März 2021</time>
                    </div>
                </a>

                <a href="https://google.com" className="card card3">
                    <div className="inner">
                        <h2 className="title">Mit 117 Sachen durch Klugheimschen Basaltgebirge</h2>
                        <time className="subtitle">03. März 2021</time>
                    </div>
                </a>
            </main>
        </>
    )
}

export default DonutShopCard;