import React from "react";
class CounterDisplay extends React.Component {

    render() {
        return (
            <h1>
            Counter: {this.props.count}
            </h1>
        );
    }
} 

