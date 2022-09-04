import React from 'react'

import {Genre, Year, Country, Rating} from './FiltersBlock'

const Filters = ({updateData}) => {

    return (
        
        <div className="filters">
            <Genre updateData = {updateData} key = "genre" />
            <Year updateData = {updateData} key = "year" />
            <Country updateData = {updateData} key = "country" />
            <Rating updateData = {updateData} key = "rating" />
        </div>

    )
}

export default Filters