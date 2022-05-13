
import React, {useEffect, useState} from "react";

function Cart ({user}){
    const [cartUser, setCartUser] = useState(null)
    const [donutsInCart, setDonutsInCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(resp => resp.json())
            .then(data => setCartUser((data.filter(uzer => uzer.id === user.id))[0]))
            
        
        
    },[])

    useEffect(() => {
        cartUser !== null ? setDonutsInCart(cartUser.donut_carts) : console.log(0)
    },[cartUser])

    useEffect(() => {
        donutsInCart !== [] ? setTotal((donutsInCart.length)) : console.log(0)
    },[donutsInCart])

    function handleCheckout(){
        alert('Happy doing business with you')
        fetch(`http://localhost:3000/cart/${user.id}`, {
        method: "DELETE",})
        .then(setDonutsInCart([]))

    }
    
    return (
        <>{donutsInCart.map(donut =>{
            return(
                <div class="wrapper">
                <div class="blog_post">
                    
                    <div class="container_copy"> 
                        
                        <h1>Donut Name:</h1>
                        <p>{donut.donut_name}</p>
                        <h2>Price:</h2>
                        <p>$1</p>
                    </div>
                    
                </div>
            </div>
            )
            
        })}
        <div class="wrapper">
                <div class="blog_post">
                    
                    <div class="container_copy"> 
                        
                        <h1>Total:</h1>
                        <p>${total}</p>
                        
                    </div>
                    <button className="btn_primary" onClick={() => handleCheckout()}  >Checkout</button>
                </div>
            </div>
        
        </>
    )
}

export default Cart;