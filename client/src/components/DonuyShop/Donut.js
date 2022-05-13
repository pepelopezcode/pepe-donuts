import React from "react";


function Donut({donut}) {
    
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div id="container">
                <div className="product-details">
                    <h1>{donut.name}</h1>
                    <p className="information">{donut.description}</p>
                    <div className="control">
                        <button className="btn">
                            <span className="price">$5</span>
                            <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span className="buy">Get now</span>
                        </button>
                    </div>
                </div>
                <div className="product-image">
                    <img src="https://www.justataste.com/wp-content/uploads/2014/03/glazed-doughnut-holes-recipe.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Donut;