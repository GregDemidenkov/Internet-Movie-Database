import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BuyForm } from 'components/pages/form-page/BuyForm'

import arrComeBack from 'assets/img/come-back.svg'

export const FormPage = () => {

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