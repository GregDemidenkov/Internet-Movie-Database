import React from 'react'

export const FilterDropdown = ({
    updateData,
    filterInfo
}) => {

    return (
        <div className = {"filters__" + filterInfo.filterName + " dropdown-menu"}>
            <button className = "filters__button country__button " type = "button">
                <p>{filterInfo.label}</p>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                fill="#ffffff" stroke="none">
                    <path d="M77 118 l43 -42 40 39 c22 21 37 41 35 44 -3 2 -21 -11 -40 -29 l-35
                    -34 -33 32 c-18 18 -37 32 -42 32 -5 0 9 -19 32 -42z"/>
                </g>
                </svg>
            </button>
            <ul className = {"dropdown-content " + filterInfo.filterName + "-dropdown"}>
                {
                    filterInfo.filterList.map(obj => 
                        <li key = {obj.label} className = "dropdown-item" onClick = {() => {updateData({key: filterInfo.filterName, value: obj.label})}}>
                            <p>{obj.label}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}