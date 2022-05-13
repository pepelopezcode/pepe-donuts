import React from "react";


function Donut({donut, user}) {

    function addToCart(){
        fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                donut_name: donut.name,
                price: 1,
                user_id: user.id

            }),
        })
            .then((r) => r.json())
            .then(data => console.log(data));
    }
    
    
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div id="container">
                <div className="product-details">
                    <h1>{donut.name}</h1>
                    <p className="information">{donut.description}</p>
                    <div className="control">
                        <button className="btn" onClick={() => addToCart()} >
                            <span className="price">$1</span>
                            <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span className="buy">Get now</span>
                        </button>
                    </div>
                </div>
                <div className="product-image">
                    <img src={donut.image_url} alt="" />
                </div>
            </div>
        </>
    )
}

export default Donut;