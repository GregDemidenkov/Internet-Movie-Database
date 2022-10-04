import React from 'react'

export const BaseInput = ({
  type,
  placeholder,
  maxLength
}) => {
  return (
    <input
        required
        type = {type}
        placeholder = {placeholder}
        maxLength = {maxLength}
      >
    </input>
  )
}