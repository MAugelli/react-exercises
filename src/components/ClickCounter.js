import { useState } from "react"
import { Link } from "react-router-dom";

function ClickCounter() {
    const [counter, setCounter] = useState(0)

    function handlerIncrementCounter() {
        setCounter(counter + 1)
    }

    return (<div>
        <h2>Counter: {counter} </h2>
        <button onClick={handlerIncrementCounter}>Increment</button>
        <div>
        <Link to="/"> Welcome</Link> | <Link to="/counter"> Counter </Link> | <Link to="/users"> GitHub user </Link> 
        </div>
    </div>);

}

export default ClickCounter;