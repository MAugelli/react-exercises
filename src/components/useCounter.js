
import { useCallback, useState } from "react";

export function useCounter(initalValue = 0) {
    const [counter, setCounter] = useState(initalValue)

    const handleCounterIncrement = useCallback(
        function handleCounterIncrement() {
            setCounter((c) => c + 1)
        }, [])
    const handleCounterDecrement = useCallback(
        function handleCounterDecrement() {
            setCounter((c) => c - 1)
        }, [])
    const handleCounterReset = useCallback(
        function handleCounterReset() {
            setCounter(initalValue)
        }, [initalValue])

    return {
        counter: counter,
        increment: handleCounterIncrement,
        decrement: handleCounterDecrement,
        reset: handleCounterReset
    }
}
