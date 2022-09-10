import React from 'react'

import { AboutFilm, NameFilm, Poster, Raiting, Synopsis, Images } from '../../'


const FilmSection = ({filmCart, images}) => {

    return (
        <div className="film-section">
            <div className = "film-main">
                <Poster posterUrl = {filmCart.posterUrl} />
                <div className = "film-main__info">
                    <NameFilm 
                            serial = {filmCart.serial}
                            nameRu = {filmCart.nameRu}
                            year = {filmCart.year}
                            endYear = {filmCart.endYear}
                            nameOriginal = {filmCart.nameOriginal}
                            ratingAgeLimits = {filmCart.ratingAgeLimits}
                    />
                    <AboutFilm 
                        serial = {filmCart.serial}
                        year = {filmCart.year}
                        countries = {filmCart.countries}
                        genres = {filmCart.genres}
                        slogan = {filmCart.slogan}
                        filmLength = {filmCart.filmLength}
                    />            
                </div>
            </div>
           <Synopsis 
                description = {filmCart.description}
                shortDescription = {filmCart.shortDescription}
            />
            <Raiting 
                ratingKinopoisk = {filmCart.ratingKinopoisk}
                webUrl = {filmCart.webUrl}
            />
            {
                images.length > 0 &&
                <Images images = {images} />
            }

        </div>
    )
}

export default FilmSection