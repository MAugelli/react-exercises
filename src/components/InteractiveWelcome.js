import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
    state = {
        username: ""
    }
 
    handleImputName= (event) =>{
        const name = event.target.value 

        this.setState({
            username:name
        })
    }

    render() {
        return (
            <div>
                {this.state.username === "" && <h2>What's your name?</h2>}
                {this.state.username !== "" && <Welcome name={this.state.username} />}
                <input type="text" name="username" onChange={this.handleImputName}/>
            </div>
        );
    }
}

export default InteractiveWelcome;