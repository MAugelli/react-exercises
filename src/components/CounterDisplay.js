import Counter from "./Counter";

function CounterDisplay(props) {
    return ( <h1>
        Counter: <Counter initialValue={props.initialValue} incrementBy={props.incrementBy} timeOut={props.timeOut}/> 
    </h1> 
    )        
}
 
export default CounterDisplay;