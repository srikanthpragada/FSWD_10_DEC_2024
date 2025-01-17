import React from 'react'

export default function Today() {
    let ct = new Date().toLocaleString()
    return (
        <>
            <h4>Date and Time</h4>
            <h1 className="text-primary">{ct}</h1>
        </>
    )
}
