import React from 'react'

import { filtersList } from './filters-block/filter-data-mock'

import { FilterDropdown } from './filters-block/FilterDropdown'

export const Filters = ({updateData}) => {
    return (
        <div className="filters">
            {
                filtersList.map((obj) => (
                    <FilterDropdown 
                        key = {obj.id}
                        updateData = {updateData}
                        filterInfo = {obj}
                    />
                ))
            }
        </div>

    )
}