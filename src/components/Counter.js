import { useCounter } from "./useCounter";

function Counter({ initialValue = 0 }) {
    const { counter, increment, decrement, reset } = useCounter(initialValue)


    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}


export default Counter;