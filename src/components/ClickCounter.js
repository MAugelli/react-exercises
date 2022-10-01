import {useState} from "react"

function ClickCounter (){
    const [counter, setCounter] = useState(0)

    function handlerIncrementCounter() {
        setCounter(counter + 1)
    }

        return (<div>
            <h2>Counter: {counter} </h2>
            <button onClick={handlerIncrementCounter}>Increment</button>
        </div>);

}

export default ClickCounter;