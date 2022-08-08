import React from 'react'

import arrComeBack from '../img/come-back.svg'


function Serials() {
    return(
        <>
            <main>
                <div class = "main-container">
                    <a className = "come-back" href="">
                        <img src = {arrComeBack} alt="" />
                        <p>Назад</p>
                    </a>
                    <h3>Сериалы</h3>
                </div>
            </main>
        </>
    )
}

export default Serials;