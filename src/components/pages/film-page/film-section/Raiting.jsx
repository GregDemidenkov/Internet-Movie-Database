import React from 'react'

import watch from 'assets/img/watch.svg'

import { BaseButton } from 'components/ui/BaseButton'

export const Raiting = ({ratingKinopoisk, webUrl}) => {

    return (
        <div className = "raiting-and-watch">
            <h2>Оценка: <span>{ratingKinopoisk}/10</span></h2>
            <a href = {webUrl} target="_blank" rel="noreferrer">
                <BaseButton className = "button button_watch">
                    <p>Смотреть</p>
                    <img src = {watch} alt = "" />
                </BaseButton>
            </a>
        </div>
    )
}