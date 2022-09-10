import React from 'react'

export const Poster = ({posterUrl}) => {

    return (
        <div className = "film-main__poster">
            <img className = "poster_img" src = {posterUrl} alt="" />
        </div>
    )
}
