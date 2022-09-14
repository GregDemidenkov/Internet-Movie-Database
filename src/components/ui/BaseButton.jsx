import React from 'react'

export const BaseButton = ({
  onClick = () => {},
  disabled,
  children,
  type,
  className
}) => {
  return (
    <button
      type={type || "button"}
      className = {className}
      disabled={disabled || false}
      onClick={onClick}
      >
      {children}
    </button>
  )
}