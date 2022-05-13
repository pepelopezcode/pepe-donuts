import React from "react";
import DonutShopCard from "./DonutShopCard"

function Home({currentShop}) {
    return (
        <>
            <h1>Home</h1>
            <DonutShopCard currentShop={currentShop} />
        </>
    )
}

export default Home;