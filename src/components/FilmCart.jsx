import React,  {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const FilmCart = ({poster, name, rating, id}) => {
    
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
        
        <Link className = "film film_item film_margin-bottom" to = {`/filmPage/${id}`} id = {id}>
            <img className = "film__poster" src={poster} alt="" />
            <p className = {classNameRating}>{rating.toFixed(1)}</p>
            <p className = "film__name">{name}</p>
        </Link>

    )
}

export default FilmCart;