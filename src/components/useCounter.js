import {useState} from "react";

export function useCounter (initalValue = 0) {
    const [counter, setCounter] = useState(initalValue)

    function handleCounterIncrement() {
        setCounter((c) => c +1)
    }

    function handleCounterDecrement() {
        setCounter((c) => c - 1)
    }

    
    function handleCounterReset() {
        setCounter(initalValue)
    }

    return{
        counter: counter,
        increment: handleCounterIncrement,
        decrement: handleCounterDecrement,
        reset: handleCounterReset
    }
}
