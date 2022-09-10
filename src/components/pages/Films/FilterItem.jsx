import React from 'react'
import deleteButton from "assets/img/delete.svg"

export const FilterItem = ({filter, updateData, filterKey}) => {

    return (
        <div className="filter-item">
            <p>{filter}</p>
            <img onClick = {() => {updateData({key: filterKey, value: ""})}} src = {deleteButton} alt="" />
        </div>
    )
}
