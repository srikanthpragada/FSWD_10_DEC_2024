import React from 'react'

export default function Message(props) {
  return (
      <h1 style={ {color: props.color}}>{props.message}</h1>
  )
}
