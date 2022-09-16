import React, {createRef} from "react"

class UncontrolledLogin extends React.Component {
    _formRef = createRef()
    
    componentDidMount(){
        this._formRef.current.elements.username.focus()
    }

    handleFormSubmit = (event) =>{
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        });
    } 

    render() { 
        return (
            <div>
                <h1>UncontrolledLogin</h1> 
                <form onSubmit={this.handleFormSubmit} ref={this._formRef}>
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <input type="checkbox" name="remember"/>

                <button type="reset">Reset</button>
                <button type="submit">Login</button>  
                </form>
            </div>
        );
    }
}
 
export default UncontrolledLogin;