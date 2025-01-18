import React from 'react'

export default function Message2( {message, color}) {
  return (
      <h1 style={ {color: color}}>{message}</h1>
  )
}
