import React, {useEffect, useState} from "react";
import Donut from "./Donut"
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

function Shop({donutShopInfo, currentShop}) {
    const [donutInfo, setDonutInfo] = useState([])
    const [reviewInfo, setReviewInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/donuts')
        .then(resp => resp.json())
        .then(setDonutInfo(donutShopInfo[currentShop].donuts))
        fetch('http://localhost:3000/reviews')
        .then(resp => resp.json())
        .then(setReviewInfo(donutShopInfo[currentShop].reviews))
    },[])
    console.log(donutShopInfo[currentShop].reviews)
    
    return (<>
    {donutInfo.map(donut => {
        return(<Donut key={donut.id} donut={donut} />)  
    })}
    {reviewInfo.map(review => {
        return(<Reviews key={review.id} review={review} />)
    })}
    
    <ReviewForm />
    </>
    )
}

export default Shop;