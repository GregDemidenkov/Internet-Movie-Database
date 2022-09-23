import React from 'react'
import { Link } from 'react-router-dom'

export const FilmCart = ({
    poster, 
    name,
    rating, 
    id, 
    countries, 
    genres, 
    year,
    active
}) => {
    
    let classNameRating = "rating"
    const filmStyle = active 
        ? "card card_item card_margin film-animation" 
        : "card card_item film-animation"

    const ratingColor = (rating) => {
        if (rating < 5) {
            classNameRating += " rating_red"
        } else if (rating >= 5 && rating < 7) {
            classNameRating += " rating_yellow"
        } else {
            classNameRating += " rating_green"
        }
    }
    
    ratingColor(rating);
    
    return(
        
        <Link className = {filmStyle} to = {`/filmPage/${id}`} id = {id}>
            <div className = "card_cover">
                <img className = "card_img" src = {poster} alt="" />
                <p className = {classNameRating}>{rating.toFixed(1)}</p>
                {
                    <div className = "info">
                        <p>
                            <span>Страны: </span>
                            {
                                countries.map((obj, index) => (
                                    index != (countries.length - 1) 
                                    ? `${obj.country}, ` 
                                    : obj.country
                                ))
                            }
                        </p>
                        <p>
                            <span>Жанры: </span>
                            {
                                genres.map((obj, index) => (
                                    index != (genres.length - 1) 
                                    ? `${obj.genre}, ` 
                                    : obj.genre
                                ))
                            }
                        </p>
                        <p><span>Год: </span>{year}</p>
                    </div>
                }
            </div>
            <p className = "card_title_word_wrap">{name}</p>
        </Link>
    )
}
