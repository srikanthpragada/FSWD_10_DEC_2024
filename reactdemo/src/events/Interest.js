import React from 'react'

export default function Interest() {
    function calculate() {
        let amount = document.getElementById('amount').value;
        let rate = 12;
        let interest = (amount * rate) / 100;
        //alert(`Interest on ${amount} at ${rate}% is ${interest}`);
        document.getElementById('interest').innerHTML =
             `Interest on ${amount} at ${rate}% is ${interest}`;
    }

    return (
        <>
            <h2>Interest Calculation</h2>
            Deposit Amount : <input type="number" id="amount" />
            <p></p>
            <button onClick={calculate}>Calculate</button>
            <h3 id="interest"></h3>
        </>

    )
}
