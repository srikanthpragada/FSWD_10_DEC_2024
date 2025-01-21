import { useState } from 'react'

export default function CounterState() {
    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        console.log(counter);
    }
    function decrement() {
        setCounter(counter - 1);
        console.log(counter);
    }

    function resetCounter() {
        setCounter(0);
    }
    
    return (
        <>
            <h2>Counter</h2>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            &nbsp;
            <button onClick={decrement}>Decrement</button>
            &nbsp;
            <button onClick={resetCounter}>Reset</button>
        </>
    )
}
