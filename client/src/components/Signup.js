import React, {useState} from "react";


function Signup({ switchToSignup }) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")


    function handleSignupSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then((r) => r.json())
            .then(data => console.log(data));
    }

    return (
        <div className="reviewForm">
            <h3>Signup</h3>
            <form onSubmit={(e) => handleSignupSubmit(e)} >
                <label>Username:
                    <input
                        type="text"
                        placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>Password:
                    <input
                        type="text"
                        placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>Re-Enter Password:
                    <input
                        type="text"
                        placeholder="Re-Enter Password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </label>

                <input type="submit" className="submitButton" />
                <p onClick={switchToSignup} >login?</p>
            </form>
        </div>
    )
}

export default Signup