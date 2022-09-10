import React from 'react'

export const Synopsis = ({description, shortDescription}) => {

    return (
        <div className = "synopsis">
            <h2>Синопсис:</h2>
            <p>{description || shortDescription}</p>
        </div>
    )
}
