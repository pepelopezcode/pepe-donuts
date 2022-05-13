import React from "react";

function Login({switchToSignup}) {
    return (
        <div className="reviewForm">
            <h3>Login</h3>
                <form /*onSubmit={(e) => handleSubmit(e)}*/ >
                    <label>Email:
                        <input
                            type="text"
                            placeholder="Email"
                            /*onChange={(e) => setCommentValue(e.target.value)}*/
                        />
                    </label>
                    <label>Password:
                        <input
                            type="text"
                            placeholder="Password"
                            /*onChange={(e) => setCommentValue(e.target.value)}*/
                        />
                    </label>
                    
                    <input type="submit" className="submitButton" />
                </form>
                <p onClick={switchToSignup} >Signup?</p>
            </div>
                )
}

                export default Login;