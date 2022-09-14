import React from 'react'

import { Genre } from './filters-block/Genre'
import { Year } from './filters-block/Year'
import { Country } from './filters-block/Country'
import { Rating } from './filters-block/Rating'


export const Filters = ({updateData}) => {

    return (
        
        <div className="filters">
            <Genre updateData = {updateData} />
            <Year updateData = {updateData}  />
            <Country updateData = {updateData}  />
            <Rating updateData = {updateData}  />
        </div>

    )
}