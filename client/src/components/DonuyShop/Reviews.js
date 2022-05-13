import React from "react";

function Reviews({review}) {
    
    return (
        <>
            <div class="wrapper">
                <div class="blog_post">
                    <div class="img_pod">
                        <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image" className="reviewImage" />
                    </div>
                    <div class="container_copy">
                        
                        <h1>Review</h1>
                        <p>{review.comment}</p>
                    </div>
                    <a class="btn_primary" href='#'>Read More</a>
                </div>
            </div>
            
        </>)
}

export default Reviews;