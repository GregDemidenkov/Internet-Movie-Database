import React from 'react'

import watch from '../../../../img/watch.svg'

const Raiting = ({ratingKinopoisk, webUrl}) => {

    return (
        <div className = "raiting-and-watch">
            <h2>Оценка: <span>{ratingKinopoisk}/10</span></h2>
            <a className = "button button_watch" href = {webUrl} target="_blank">
                <p>Смотреть</p>
                <img src = {watch} alt = "" />
            </a>
        </div>
    )
}

export default Raiting