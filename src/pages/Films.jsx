import React from 'react'

import arrComeBack from '../img/come-back.svg'

function Films() {
    return(
        <>
            <main>
                <div class="main-container">
                    <a className = "come-back" href="">
                        <img src = {arrComeBack} alt="" />
                        <p>Назад</p>
                    </a>
                    <h3>Фильмы</h3>
                </div>
            </main>
        </>
    )
}

export default Films;