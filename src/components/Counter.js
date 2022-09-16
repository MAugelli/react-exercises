import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component { 
    state = { 
        count: this.props.initialValue
     }  

     constructor(props){ 
        super(props)

        setInterval(() => {
            this.setState((state)=>{
               return{
                count: state.count + this.props.incrementBy
               }
            })
        }, this.props.timeOut);
     }

    render() { 
        return (
            <span>
                <CounterDisplay count={this.state.count} initValue={this.props.initialValue} />
            </span>
        );
    }
}
 
export default Counter;