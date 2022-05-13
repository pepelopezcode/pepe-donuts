import React, {useEffect, useState} from "react";

function Reviews({review}) {
   
    const [userInfo, setUserInfo] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(resp => resp.json())
            .then(setUserInfo)
        
        
    },[])

    useEffect( () => {
        userInfo ? setCurrentUser((userInfo.filter(user => user.id === review.user_id))[0]) : console.log(0)
    },[userInfo])

    return (
        <>
            <div class="wrapper">
                <div class="blog_post">
                    
                    <div class="container_copy"> 
                        
                        <h1>{currentUser ? currentUser.username : 'review'}</h1>
                        <p>{review.comment}</p>
                        <h2>Rating:</h2>
                        <p>{review.rating}/10</p>
                    </div>
                    
                </div>
            </div>
            
        </>)
}

export default Reviews;