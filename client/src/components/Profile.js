import React from "react";


function Profile() {
    return (
        <div>Profile
            
            <div class="wrapper">
                <div class="blog_post">
                    <div class="img_pod">
                        <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image" className="reviewImage" />
                    </div>
                    <div class="container_copy">
                        
                        <h1>User Info</h1>
                        <p>comment</p>
                    </div>
                    <button className="btn_primary" href='#'>Update Profile</button>
                    <button className="btn_primary" href='#'>Update Password</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;