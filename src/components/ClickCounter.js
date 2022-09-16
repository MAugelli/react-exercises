import React from "react";

class ClickCounter extends React.Component {
    state = {
        counter: 0
    }

    handlerIncrementCounter = () => {
        this.setState(state => {
            return{
                counter: state.counter + 1
            }
        })
    }

    render() {
        return (<div>
            <h2>Counter: {this.state.counter} </h2>
            <button onClick={this.handlerIncrementCounter}>Increment</button>
        </div>);
    }
}

export default ClickCounter;