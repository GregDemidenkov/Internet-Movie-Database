import React from 'react'

import { BuyForm } from 'components/pages/form-page/BuyForm'
import { BackButton } from 'components/common/BackButton'

import { paths } from 'routing/config'

export const FormPage = () => {
    return (
        <main>
            <div className="main-container">
                <BackButton path = {paths.main}>На главную</BackButton>
                <h3>Оформление подписки</h3>
                <BuyForm />
            </div>
        </main>
    )
}