import React from 'react'
import PropTypes from 'prop-types';

export default function MessagePV(props) {
  return (
    <h1 style={{ color: props.color, fontSize: props.size }}>{props.message}</h1>
  )
}

// Doesn't work in React 19 onwards as it is removed and ignored 

MessagePV.propTypes = {
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}