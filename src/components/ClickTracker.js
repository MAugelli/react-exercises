import React from "react";

class ClickTracker extends React.Component {
    state = {  
        buttonValue: ""
    } 

    handlerTrackerButton = (e) =>{
        const value = e.target.value

        this.setState({
            buttonValue : value 
        })
    }

    render() { 
        return (<div>
            <h1>Click a button!</h1>
            <button onClick={this.handlerTrackerButton} name="Qui" value={"Qui"}>Qui</button>
            <button onClick={this.handlerTrackerButton} name="Quo" value={"Quo"}>Quo</button>
            <button onClick={this.handlerTrackerButton} name="Qua" value={"Qua"}>Qua</button>
            {this.state.buttonValue && <h1>You press the {this.state.buttonValue} button!</h1>}
        </div>);
    }
}
 
export default ClickTracker ;