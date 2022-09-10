import React from 'react'
import { Link } from 'react-router-dom'
import arrComeBack from 'assets/img/come-back.svg'

export const BackButton = ({ path = "/" }) => {
  return (
    <Link to={path} className = "come-back">
      <img src = {arrComeBack} alt="" />
      <p>Назад</p>
    </Link>
  )
}