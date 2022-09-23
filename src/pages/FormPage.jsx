import React, {useEffect} from 'react'

import { BuyForm } from 'components/pages/form-page/BuyForm'
import { BackButton } from 'components/common/BackButton'

export const FormPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Оформление Подписки"
    }, [])

    return (
        <main>
            <div className="main-container">
                <BackButton>На главную</BackButton>
                <h3>Оформление подписки</h3>
                <BuyForm />
            </div>
        </main>
    )
}