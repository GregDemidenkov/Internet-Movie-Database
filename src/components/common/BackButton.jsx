import React from 'react'
import { Link } from 'react-router-dom'

import arrComeBack from 'assets/img/come-back.svg'

export const BackButton = ({
  path,
  children
}) => {
  return (
    <Link to = {path} className = "come-back">
      <img src = {arrComeBack} alt="" />
      <p>{children}</p>
    </Link>
  )
}