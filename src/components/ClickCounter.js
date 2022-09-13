import { useEffect, useState } from "react"

function ClickCounter({change}) {
    const [counter, setCounter] = useState(0)

    useEffect(() => (
       change(counter)
    ), [counter, change])

    function handlerIncrementCounter() {
        setCounter(counter + 1) 
    }

    return (
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={handlerIncrementCounter}>Increment</button>
        </div>);

}

export default ClickCounter;