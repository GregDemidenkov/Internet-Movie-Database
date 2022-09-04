import React from 'react'
import { Link } from 'react-router-dom'

const FilmCart = ({poster, name, rating, id, countries, genres, year, active}) => {
    
    let classNameRating = "film__rating"

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
        
        <Link href = "#top" className = "film film_item film_margin-bottom" to = {`/filmPage/${id}`} id = {id}>
            <div className = "film__poster">
                <img src={poster} alt="" />
                {
                    active &&
                    <div className="info">
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
            <p className = {classNameRating}>{rating.toFixed(1)}</p>
            <p className = "film__name">{name}</p>
        </Link>

    )
}

export default FilmCart;