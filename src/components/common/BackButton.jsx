import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import arrComeBack from 'assets/img/come-back.svg'

export const BackButton = ({
  path,
  children
}) => {
  const navigate = useNavigate()
  return (
    <Link to = {path ? path : navigate(-1)} className = "come-back">
      <img src = {arrComeBack} alt="" />
      <p>{children}</p>
    </Link>
  )
}