import React from "react";


function Donut() {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div id="container">
                <div class="product-details">
                    <h1>Sprinkles Donut</h1>
                    <p class="information">These fried doughnuts are of Italian origin. Their texture can either be fluffy or dense, depending on what type of dough they're made with. They're often topped with a sprinkle of powdered sugar.</p>
                    <div class="control">
                        <button class="btn">
                            <span class="price">$5</span>
                            <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span class="buy">Get now</span>
                        </button>
                    </div>
                </div>
                <div class="product-image">
                    <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                </div>
            </div>
        </>
    )
}

export default Donut;