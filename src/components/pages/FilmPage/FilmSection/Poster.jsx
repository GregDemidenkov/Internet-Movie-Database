import React from 'react'

const Poster = ({posterUrl}) => {

    return (
        <div className = "film-main__poster">
            <img className = "poster_img" src = {posterUrl} alt="" />
        </div>
    )
}

export default Poster