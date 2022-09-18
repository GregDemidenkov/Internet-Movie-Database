import React from 'react'

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const Message = ({count}) => {
    return (
        <div className = {count > 0 ? "message" : "message active"}>
            <h3>Фильмы не найдены</h3>
            <SentimentVeryDissatisfiedIcon className = "sad-smile" />
        </div>
    )
}
