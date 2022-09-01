import React,  {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import arrComeBack from '../img/come-back.svg'
import deleteButton from "../img/delete.svg"

import {FilmCart, Filters, FilmLoading} from '../components'

function Films() {

    const [films, setFilms] = useState([]);
    const [fetching, setFetching] = useState(false)
    const [updating, setUpdating] = useState(0)
    const [curentRating, setСurentRating] = useState("")
    const [curentGenre, setСurentGenre] = useState("")
    const [curentCountry, setСurentCountry] = useState("")
    const [curentYear, setСurentYear] = useState("")

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    const init = async () => {
        try {
            setFetching(false)
            const arrApi = [
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=1', {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                        'Content-Type': 'application/json',
                    },
                }),
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=2', {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                        'Content-Type': 'application/json',
                    },
                }),
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=3', {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                        'Content-Type': 'application/json',
                    },
                }),
            ]
            // 
            const arrResponces = await Promise.allSettled(arrApi)
            const arrRequestJson = arrResponces
                .filter(response => response.status === "fulfilled")
                .map(response =>  response.value.json())
            const arrResponseJson = await Promise.all(arrRequestJson)
            // prepare data
            const arrItems = arrResponseJson
                .map(response => response.items)
                .flat()
                .map(item => ({ ...item, status: "active" }))
            // set to dinamic var
            setFilms([...films, ...arrItems])
        } catch (e) {
            console.log("init: ", e)
        } finally {
            setFetching(true)
        }
    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        films.forEach(film => {
            film.status = "active"
        })

        filterDict["rating"](curentRating)
        filterDict["genre"](curentGenre)
        filterDict["country"](curentCountry)
        filterDict["year"](curentYear)
        
        setUpdating(0)
        setFilms(films)
    }, [updating == 1])


    const changeStatusByRating = (rating) => {
        films.forEach(obj => {
            if (obj.status == "active") {
                if (obj.ratingKinopoisk < rating) {
                    obj.status = "nonActive"
                }
            }
        })
    }

    const changeStatusByYear = (leftYaer, rightYaer) => {
        films.forEach(obj => {
            if (obj.status == "active") {
                if (obj.year < leftYaer || obj.year > rightYaer ) {
                    obj.status = "nonActive"
                }
            }
        })
    }

    const updateByRating = (info) => {
        if (info === "") {
            return 0
        }
        if(info === "Больше 9") {
            changeStatusByRating(9)
        }
        if(info === "Больше 8") {
            changeStatusByRating(8)
        }
        if(info === "Больше 7") {
            changeStatusByRating(7)
        }
        if(info === "Больше 6") {
            changeStatusByRating(6)
        }
        if(info === "Больше 5") {
            changeStatusByRating(5)
        }
    }

    const updateByGenre = (genre) => {
        if (genre === "") {
            return 0
        }
        films.forEach(obj => {
            if (obj.status== "active") {
                let flag = false
                
                obj.genres.forEach(el => {
                    if(el.genre == genre.toLowerCase()) {
                        flag = true
                    }
                })
                
                if (flag == false) {
                    obj.status = "nonActive"
                }
            }
        })
    }

    const updateByCountry = (country) => {
        if (country === "") {
            return 0
        }
        films.forEach(obj => {
            if (obj.status== "active") {
                let flag = false
                
                obj.countries.forEach(el => {
                    if(el.country == country) {
                        flag = true
                    }
                })
                
                if (flag == false) {
                    obj.status = "nonActive"
                }
            }
        })
    }

    const updateByYear = (info) => {
        if (info === "") {
            return 0
        }
        if(info === "2022 год") {
            changeStatusByYear(2022, 2022)
        }
        if(info === "2021 год") {
            changeStatusByYear(2021, 2021)
        }
        if(info === "2020 год") {
            changeStatusByYear(2020, 2020)
        }
        if(info === "2019 год") {
            changeStatusByYear(2019, 2019)
        }
        if(info === "2015-2019") {
            changeStatusByYear(2015, 2019)
        }
        if(info === "2010-2015") {
            changeStatusByYear(2010, 2015)
        }
        if(info === "2000-2010") {
            changeStatusByYear(2000, 2010)
        }
        if(info === "1990-2000") {
            changeStatusByYear(1990, 2000)
        }
        if(info === "1980-1990") {
            changeStatusByYear(1980, 1990)
        }
        if(info === "до 1980") {
            changeStatusByYear(1900, 1980)
        }
    }

    const filterDict = {
        "rating": updateByRating,
        "genre": updateByGenre,
        "country": updateByCountry,
        "year": updateByYear
    }
    

    const updateDataByFilter = (info) => {
        if (info.key == "rating") {
            
            setСurentRating(info.value, [setUpdating(1)])
        }
        if (info.key == "genre") {
            setСurentGenre(info.value, [setUpdating(1)])
        }
        if (info.key == "country") {
            setСurentCountry(info.value, [setUpdating(1)])
        }
        if (info.key == "year") {
            setСurentYear(info.value, [setUpdating(1)])
        }
    }

    
    return (
        <main>
            <div className = "main-container">
                <a onClick = {goBack} className = "come-back" href="#">
                    <img src = {arrComeBack} alt="" />
                    <p>Назад</p>
                </a>
                <h3>Фильмы</h3>
                <div className="active-filter-list">
                    {
                        curentGenre &&
                        <div className="filter-item">
                            <p>{curentGenre}</p>
                            <img onClick = {() => updateDataByFilter({key: "genre", value: ""})} src = {deleteButton} alt="" />
                        </div>
                    }
                    {
                        curentCountry &&
                        <div className="filter-item">
                            <p>{curentCountry}</p>
                            <img onClick = {() => updateDataByFilter({key: "country", value: ""})} src = {deleteButton} alt="" />
                        </div>
                    }
                    {
                        curentYear &&
                        <div className="filter-item">
                            <p>{curentYear}</p>
                            <img onClick = {() => updateDataByFilter({key: "year", value: ""})} src = {deleteButton} alt="" />
                        </div>
                    }
                    {
                        curentRating &&
                        <div className="filter-item">
                            <p>{curentRating}</p>
                            <img onClick = {() => updateDataByFilter({key: "rating", value: ""})} src = {deleteButton} alt="" />
                        </div>
                    }
                </div>
                <Filters updateData = {updateDataByFilter} key = "filters_block"/>
                <div className = "films-list">
                    {
                        fetching ?
                        films.map( obj => 
                            obj.status == "active" &&
                            <FilmCart 
                                key = {obj.kinopoiskId} 
                                id = {obj.kinopoiskId} 
                                name = {obj.nameRu}
                                poster = {obj.posterUrlPreview}
                                rating = {obj.ratingKinopoisk} 
                            />
                        )
                        : Array(20).fill(0).map((_, index) => <FilmLoading key = {index}/>)
                    }
                </div>
            </div>
        </main>
    );
    
}

export default Films;

