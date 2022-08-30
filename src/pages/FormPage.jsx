import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BuyForm } from '../components'

import arrComeBack from '../img/come-back.svg'

const FormPage = () => {

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <main>
            <div className="main-container">
                <a onClick = {goBack} className = "come-back" href="#">
                    <img src = {arrComeBack} alt="" />
                    <p>Назад</p>
                </a>
                <h3>Оформление подписки</h3>
                <BuyForm />
            </div>
        </main>
    )
}

export default FormPage