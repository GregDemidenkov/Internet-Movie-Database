import React,  {useState, useEffect} from 'react'

const Year = ({updateData}) => {

    const years = ["2022 год", "2021 год", "2020 год", 
                    "2019 год", "2015-2019", "2010-2015", "2000-2010", 
                    "1990-2000", "1980-1990", "до 1980"]

    return (
        
        <div className = "filters__year dropdown-menu">
            <button className = "filters__button year__button " type = "button">
                <p>Годы</p>
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
            <ul className = "dropdown-content year-dropdown">
                
                {
                    years.map(obj => 
                        <li key = {obj} className = "dropdown-item">
                            <a onClick = {() => {updateData({key: "year", value: obj})}}>{obj}</a>
                        </li>
                    )
                }
                
            </ul>
        </div>

    )
}

export default Year