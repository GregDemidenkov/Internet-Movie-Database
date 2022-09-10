import React from 'react'
import MaskedInput from 'react-text-mask';

export const BuyForm = () => {

    return (
        <form action="">
            <h3>REFILMS: <span>Подписка 299 ₽</span></h3>
            <div className="main-info">
                <p>Имя <br /><input type="text" placeholder = "Имя" maxLength = "20" /></p>
                <p>Фамилия <br /><input type="text" placeholder = "Фамилия" maxLength = "20" /></p>
                <p>Почта <br /><input type="text" placeholder = "something@mail.com" maxLength = "20" /></p>
                <p>Номер телефона 
                    <br />
                    <MaskedInput 
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
                        mask = {[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ]} 
                        type="text" 
                        placeholder = "От 16 до 19 цифр" 
                        guide = {true}
                    />
                </p>
                <p>Срок действия 
                    <br />
                    <MaskedInput
                        mask = {[/\d/, /\d/, '/', /\d/, /\d/]} 
                        type="text" 
                        placeholder = "мм/гг" 
                        guide = {true}
                    />
                </p>
                <p>CVV/CVC <br /><input type="password" placeholder = "3 цифры" maxLength = "3" /></p>
            </div>
            <button type = "button" onClick = {() => alert("Подиска оформлена!")} >Оплатить 299 ₽</button>
            <p className = "info">Нажимая «Оплатить» вы принимаете условия <span>оферты</span>, а также <span>Лицензионного соглашения</span> и <span>Политики конфиденциальности</span></p>
        </form>
    )
}
