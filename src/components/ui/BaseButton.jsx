import React from 'react'

export const BaseButton = ({
  onClick = () => {},
  disabled,
  children,
  type
}) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled || false}
      onClick={onClick}
      >
      {children}
    </button>
  )
}