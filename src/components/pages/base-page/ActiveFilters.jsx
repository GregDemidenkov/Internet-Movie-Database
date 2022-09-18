import React from 'react'

import { FilterItem } from 'components/pages/base-page/FilterItem'

export const ActiveFilters = ({
    curentGenre,
    curentCountry,
    curentYear,
    curentRating,
    updateDataByFilter
}) => {
    
    return (
        <div className="active-filter-list">
            {
                curentGenre &&
                <FilterItem 
                    filter = {curentGenre}
                    updateData = {updateDataByFilter}
                    filterKey = {"genre"} 
                />
            }
            {
                curentCountry &&
                <FilterItem 
                    filter = {curentCountry}
                    updateData = {updateDataByFilter}
                    filterKey = {"country"} 
                />
            }
            {
                curentYear &&
                <FilterItem     
                    filter = {curentYear}
                    updateData = {updateDataByFilter}
                    filterKey = {"year"} 
                />
            }
            {
                curentRating &&
                <FilterItem 
                    filter = {curentRating}
                    updateData = {updateDataByFilter}
                    filterKey = {"rating"} 
                />
            }
        </div>
    )
}