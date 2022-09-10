import React,  {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import {FilmCart} from 'components/common/FilmCart'
import {Filters} from 'components/pages/films/Filters'
import {FilterItem} from 'components/pages/films/FilterItem'
import {FilmLoading} from 'components/pages/films/FilmLoading'
import {Message} from 'components/pages/films/Message'

import { BackButton } from 'components/common/BackButton'
import { paths } from 'routing/config'

import { years } from 'components/pages/films/filters-block/filter-data-mock'
import { esscenseList } from 'api/requests'
import { headers } from 'api/apiClient'

export const Films = ({page}) => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState();
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
            // fetchClient.get(url, params: { type: 'FILM', page: 1 })
            const makeDinamicQueryString = (headers) => {
                // ['type', 'page']
                const baseUri = ""
                const paramsString = Object.keys(headers).map(key => key + "=" + headers['key']).join("&")
                return baseUri+paramsString
                
            }
            const arrApi = [
                fetch(esscenseList({ type: page === "films" ? "FILM" : "TV_SERIES", page: 1 }), {
                    method: 'GET',
                    headers,
                }),
                
                fetch(esscenseList({ type: page === "films" ? "FILM" : "TV_SERIES", page: 2 }), {
                    method: 'GET',
                    headers,
                }),
                fetch(esscenseList({ type: page === "films" ? "FILM" : "TV_SERIES", page: 3 }), {
                    method: 'GET',
                    headers,
                }),
            ]
            const arrResponces = await Promise.allSettled(arrApi)
            const arrRequestJson = arrResponces
                .filter(response => response.status === "fulfilled")
                .map(response =>  response.value.json())
            const arrResponseJson = await Promise.all(arrRequestJson)
            const arrItems = arrResponseJson
                .map(response => response.items)
                .flat()
                .map(item => ({ ...item, status: "active" }))
            setItems(arrItems)
            setCount(60)
        } catch (e) {
            console.log("init: ", e)
        } finally {
            setFetching(true)
        }
    }

    useEffect(() => {
        init()
        setCount(60)
        setСurentRating("")
        setСurentGenre("")
        setСurentCountry("")
        setСurentYear("")
    }, [page])

    const changeStatusByRating = (rating) => {
        items.forEach(obj => {
            if (obj.status === "active") {
                if (obj.ratingKinopoisk < rating) {
                    obj.status = "nonActive"
                }
            }
        })
    }

    const changeStatusByYear = (leftYaer, rightYaer) => {
        items.forEach(obj => {
            if (obj.status === "active") {
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
        items.forEach(obj => {
            if (obj.status === "active") {
                let flag = false
                
                obj.genres.forEach(el => {
                    if(el.genre === genre.toLowerCase()) {
                        flag = true
                    }
                })
                
                if (flag === false) {
                    obj.status = "nonActive"
                }
            }
        })
    }

    const updateByCountry = (country) => {
        if (country === "") {
            return 0
        }
        items.forEach(obj => {
            if (obj.status === "active") {
                let flag = false
                
                obj.countries.forEach(el => {
                    if(el.country === country) {
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
        const findedElem = years.find(item => item.label === info)
        if (findedElem) {
            const [startDate, endDate] = findedElem.arrYears
            changeStatusByYear(startDate, endDate)
            return
        }
        console.log('updateByYear not found');
        // if (info === "") {
        //     return 0
        // }
        // if(info === "2022 год") {
        //     changeStatusByYear(2022, 2022)
        // }
        // if(info === "2021 год") {
        //     changeStatusByYear(2021, 2021)
        // }
        // if(info === "2020 год") {
        //     changeStatusByYear(2020, 2020)
        // }
        // if(info === "2019 год") {
        //     changeStatusByYear(2019, 2019)
        // }
        // if(info === "2015-2019") {
        //     changeStatusByYear(2015, 2019)
        // }
        // if(info === "2010-2015") {
        //     changeStatusByYear(2010, 2015)
        // }
        // if(info === "2000-2010") {
        //     changeStatusByYear(2000, 2010)
        // }
        // if(info === "1990-2000") {
        //     changeStatusByYear(1990, 2000)
        // }
        // if(info === "1980-1990") {
        //     changeStatusByYear(1980, 1990)
        // }
        // if(info === "до 1980") {
        //     changeStatusByYear(1900, 1980)
        // }
    }

    const filterDict = {
        "rating": updateByRating,
        "genre": updateByGenre,
        "country": updateByCountry,
        "year": updateByYear
    }
    

    const updateDataByFilter = (info) => {
        if (info.key === "rating") {
            
            setСurentRating(info.value, [setUpdating(1)])
        }
        if (info.key === "genre") {
            setСurentGenre(info.value, [setUpdating(1)])
        }
        if (info.key === "country") {
            setСurentCountry(info.value, [setUpdating(1)])
        }
        if (info.key === "year") {
            setСurentYear(info.value, [setUpdating(1)])
        }
    }

    useEffect(() => {
        items.forEach(film => {
            film.status = "active"
        })

        filterDict["rating"](curentRating)
        filterDict["genre"](curentGenre)
        filterDict["country"](curentCountry)
        filterDict["year"](curentYear)
        
        setUpdating(0)
        setItems(items)
        setCount(document.getElementsByClassName("film").length)
    }, [updating === 1])

    return (
        <main>
            <div className = "main-container">
                <BackButton to={paths.main} />
                <h3>
                    {
                        page === "films" 
                        ? "Фильмы" 
                        : "Сериалы"
                    }
                </h3>
                <div className="active-filter-list">
                    {
                        curentGenre &&
                        <FilterItem filter = {curentGenre}
                                    updateData = {updateDataByFilter}
                                    key = {"genre"}
                                    filterKey = {"genre"} 
                        />
                    }
                    {
                        curentCountry &&
                        <FilterItem filter = {curentCountry}
                                    updateData = {updateDataByFilter}
                                    key = {"country"}
                                    filterKey = {"country"} 
                        />
                    }
                    {
                        curentYear &&
                        <FilterItem filter = {curentYear}
                                    updateData = {updateDataByFilter}
                                    key = {"year"}
                                    filterKey = {"year"} 
                        />
                    }
                    {
                        curentRating &&
                        <FilterItem filter = {curentRating}
                                    updateData = {updateDataByFilter}
                                    key = {"rating"}
                                    filterKey = {"rating"} 
                        />
                    }
                </div>
                <Filters updateData = {updateDataByFilter} key = "filters_block"/>
                <div className = "films-list">
                    {
                        fetching ?
                        items.map( obj => 
                            obj.status == "active" &&
                            <FilmCart 
                                key = {obj.kinopoiskId} 
                                id = {obj.kinopoiskId} 
                                name = {obj.nameRu}
                                poster = {obj.posterUrlPreview}
                                rating = {obj.ratingKinopoisk}
                                countries = {obj.countries} 
                                genres = {obj.genres}
                                year = {obj.year}
                                active = {true}
                            />

                        )
                        : Array(60).fill(0).map((_, index) => <FilmLoading key = {index}/>)
                    }
                </div>
                <Message count = {count}/>
            </div>
        </main>
    );
    
}