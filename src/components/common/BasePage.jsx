import React,  {useState, useEffect} from 'react'

import { FilmCart } from 'components/common/FilmCart'
import { ActiveFilters } from '../pages/base-page/ActiveFilters'
import { BackButton } from 'components/common/BackButton'

import { Filters } from 'components/pages/base-page/Filters'
import { FilmLoading } from 'components/common/FilmLoading'
import { Message } from 'components/pages/base-page/Message'

import { years, ratings } from 'components/pages/base-page/filters-block/filter-data-mock'

import { paths } from 'routing/config'

export const BasePage = ({itemsList, page}) => {
    
    const [items, setItems] = useState(itemsList);
    const [count, setCount] = useState(itemsList.length);
    const [updating, setUpdating] = useState(0)
    const [curentRating, setСurentRating] = useState("")
    const [curentGenre, setСurentGenre] = useState("")
    const [curentCountry, setСurentCountry] = useState("")
    const [curentYear, setСurentYear] = useState("")

    console.log(items);

    useEffect(() => {
        setItems(itemsList)
    }, [itemsList])

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
        const findedElem = ratings.find(item => item.label === info)
        if (findedElem) {
            changeStatusByRating(findedElem.value)
        }
    }

    const updateByYear = (info) => {
        const findedElem = years.find(item => item.label === info)
        if (findedElem) {
            const [startDate, endDate] = findedElem.arrYears
            changeStatusByYear(startDate, endDate)
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
            return
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
                <BackButton path = {paths.main}>На главную</BackButton>
                <h3>{ page === "films" ? "Фильмы" : "Сериалы" }</h3>
                <ActiveFilters 
                    curentGenre = {curentGenre}
                    curentCountry = {curentCountry}
                    curentYear = {curentYear}
                    curentRating = {curentRating}
                    updateDataByFilter = {updateDataByFilter}
                />
                <Filters updateData = {updateDataByFilter} key = "filters_block"/>
                <div className = "films-list">
                    {
                        items.length != 0 ?
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
                                page = {page} 
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