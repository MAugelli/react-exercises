import { useState } from "react";

function Login() {
    const [user, setUser] = useState(
        {
            username: "",
            password: "",
            remember: false,
            onlogin: false
        }
    )



    function handleImputChange(event) {
        const { name, type, value, checked } = event.target

        setUser({
            [name]: type === "checkbox" ? checked : value
        })
    }

    function handleLoginButton() {
        setUser({
            onlogin: true
        })
    }

    return (
        <div>
            <h2>Login Form</h2>
            <input type="text" name="username" value={user.username} onChange={handleImputChange} />
            <input type="password" name="password" value={user.password} onChange={handleImputChange} />
            <input type="checkbox" name="remember" checked={user.remember} onChange={handleImputChange} />
            <button disabled={user.password !== "" && user.name !== "" ? false : true} onClick={handleLoginButton}>Login</button>
        </div>
    );

}

export default Login;