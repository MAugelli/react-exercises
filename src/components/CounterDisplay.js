import React from "react";
class CounterDisplay extends React.Component {

    state = {
        num: this.props.num,
    } 
    
    render() {
        return (
            <h1>
                Counter: {this.state.num}
            </h1>
        );
    }
}

export default CounterDisplay;