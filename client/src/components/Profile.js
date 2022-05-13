import React from "react";
import {useHistory} from "react-router-dom"


function Profile({user,setLoggedIn}) {
    const history = useHistory();

    function logoutFunc(){
        setLoggedIn(false)
        history.push("/")
        // fetch("http://localhost:3000/logout", {
        //     method: "DELETE",
        // })
        // .then(resp => resp.json())
        // .then(data => console.log(data));

    }

    return (
        <div>
            
            <div className="wrapper">
                <div className="blog_post">
                   
                    <div className="container_copy">
                        
                        <h1>{user.username}</h1>
                        <p>Email:</p>
                        <p>{user.email}</p>
                    </div>
                    
                    <button className="btn_primary" href='#' onClick={() => logoutFunc()} >Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;