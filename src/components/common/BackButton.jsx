import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import arrComeBack from 'assets/img/come-back.svg'

export const BackButton = ({
  children,
}) => {
  const navigate = useNavigate()

  const goBack = () => {
    children === "Назад" ? navigate(-1) : navigate('../')
  }
  
  return (
    <div onClick={goBack} className = "come-back">
      <img src = {arrComeBack} alt="" />
      <p>{children}</p>
    </div>
  )
}