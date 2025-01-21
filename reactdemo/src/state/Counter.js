import React from 'react'

export default function Counter() {
    let counter = 0;
    function increment() {
        counter++;
        console.log(counter);
    }
    function decrement() {
        counter--;
        console.log(counter);
    }
    return (
        <>
            <h2>Counter</h2>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
