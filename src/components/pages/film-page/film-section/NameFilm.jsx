import React from 'react'

export const NameFilm = ({
    serial,
    nameRu,
    year,
    endYear,
    nameOriginal,
    ratingAgeLimits

}) => {

    return (
        <div className = "name">
            <h1 className = "name__ru">
                {nameRu}
                ( 
                {
                    serial 
                    ? year + "-" + 
                        (endYear === null 
                        ? "..." 
                        : endYear)
                    : year
                }
                )
            </h1>
            <p className = "name__en">
                {nameOriginal} 
                {
                    ratingAgeLimits != null &&
                    <span>{ratingAgeLimits.slice(3)}+</span>
                }
            </p>
        </div>
    )
}
