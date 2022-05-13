import React, {useEffect, useState} from "react";
import Donut from "./Donut"
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

function Shop({ currentShop, user}) {
    const [donutShopInfo, setDonutShopInfo] = useState(null)
    const [donutInfo, setDonutInfo] = useState([])
    const [reviewInfo, setReviewInfo] = useState([])
    const [currentShopId, setCurrentShopId] = useState(null)
    const [newReview, setNewReview] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:3000/donutShops')
            .then(resp => resp.json())
            .then(setDonutShopInfo)
        
        
    },[newReview])

    

    useEffect(() => {
        if (donutShopInfo){
            setDonutInfo(donutShopInfo[currentShop].donuts)
            setReviewInfo(donutShopInfo[currentShop].reviews)
            setCurrentShopId(donutShopInfo[currentShop].id)
        }else {console.log(1)}
        
    },[donutShopInfo])
    console.log(user)
    
    return (<>
    {donutInfo.map(donut => {
        return(<Donut key={donut.id} donut={donut} user={user} />)  
    })}
    {reviewInfo.map(review => {
        return(<Reviews key={review.id} review={review}  />)
    })}
    
    <ReviewForm  currentShopId={currentShopId} user={user} setNewReview={setNewReview} />
    </>
    )
}
// donutShopId={reviewInfo[0].donut_shop_id}
export default Shop;