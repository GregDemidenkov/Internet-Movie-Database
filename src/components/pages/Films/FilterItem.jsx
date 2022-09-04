import React from 'react'
import deleteButton from "../../../img/delete.svg"

const FilterItem = ({filter, updateData, filterKey}) => {

    return (
        <div className="filter-item">
            <p>{filter}</p>
            <img onClick = {() => {updateData({key: filterKey, value: ""})}} src = {deleteButton} alt="" />
        </div>
    )
}

export default FilterItem