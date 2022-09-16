import React from "react";

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
                {this.state.count}
            </span>
        );
    }
}
 
export default Counter;