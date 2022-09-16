import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
        onlogin: false 
    }

    handleImputChange = (event) =>{
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]:type === "checkbox" ? checked : value
        })
    }

    handleLoginButton = () => {
        this.setState({
            onlogin:true
        })} 
 
    render() { 
        return (
            <div>
                <h2>Login Form</h2>
                <input type="text" name="username" value={this.state.username} onChange={this.handleImputChange}/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleImputChange}/>
                <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleImputChange}/>
                <button disabled={this.state.password !== "" && this.state.name !== "" ? false : true} className={this.state.password.length < 8 ? "login-button-red" : "login-button-green"} onClick={this.handleLoginButton}>Login</button>

            </div>
        );
    }
}

export default Login;