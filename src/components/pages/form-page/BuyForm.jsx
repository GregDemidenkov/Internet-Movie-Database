import React from 'react'
import MaskedInput from 'react-text-mask';

import { BaseButton } from 'components/ui/BaseButton'
import { BaseInput } from 'components/ui/BaseInput';

export const BuyForm = () => {
    return (
        <form action="" onSubmit={() => alert("Подписка оформлена!")}>
            <h3>REFILMS: <span>Подписка 299 ₽</span></h3>
            <div className="main-info">
                <p>Имя <br /><BaseInput type="text" placeholder = "Имя" maxLength = "20" /></p>
                <p>Фамилия <br /><BaseInput type="text" placeholder = "Фамилия" maxLength = "20" /></p>
                <p>Почта <br /><BaseInput type="text" placeholder = "something@mail.com" maxLength = "20" /></p>
                <p>Номер телефона 
                    <br />
                    <MaskedInput 
                        required
                        type="text" 
                        mask={['+','7',' ','(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                        placeholder = "+7(_ _ _) - _ _ _ - _ _ - _ _" 
                        guide = {true}
                    />
                </p>
            </div>
            <div className="card-info">
                <p>Номер карты 
                    <br />
                    <MaskedInput 
                        required
                        type="text"
                        mask = {[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ]}  
                        placeholder = "От 16 до 19 цифр" 
                        guide = {true}
                    />
                </p>
                <p>Срок действия 
                    <br />
                    <MaskedInput
                        required
                        type="text" 
                        mask = {[/\d/, /\d/, '/', /\d/, /\d/]} 
                        placeholder = "мм/гг" 
                        guide = {true}
                    />
                </p>
                <p>CVV/CVC <br /><BaseInput type="password" placeholder = "3 цифры" maxLength = "3" /></p>
            </div>
            <BaseButton type = "submit">Оплатить 299 ₽</BaseButton>
            <p className = "info">Нажимая «Оплатить» вы принимаете условия <span>оферты</span>, а также <span>Лицензионного соглашения</span> и <span>Политики конфиденциальности</span></p>
        </form>
    )
}
