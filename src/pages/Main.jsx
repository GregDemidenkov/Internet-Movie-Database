import React,  {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import {FilmCart, FilmLoading} from '../components'

const Main = () => {
    
    const sliderSetting = {
        infinite: false,
        speed: 220,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
            },
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    }
    
    const [topFilms, setTopFilms] = useState([]);
    const [topSerials, setTopSerials] = useState([]);
    const [fetching, setFetching] = useState(false)

    const init = async () => {
        try {
            setFetching(false)
            const arrApi = [
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&yearFrom=2021&yearTo=2021&page=2', {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
                        'Content-Type': 'application/json',
                    },
                }),
                fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SERIES&yearFrom=2021&yearTo=2021&page=2', {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
                        'Content-Type': 'application/json',
                    },
                }),
            ]
            const arrResponces = await Promise.allSettled(arrApi)
            const arrRequestJson = arrResponces
                .filter(response => response.status === "fulfilled")
                .map(response =>  response.value.json())
            const arrResponseJson = await Promise.all(arrRequestJson)
            setTopFilms(arrResponseJson[0].items.slice(0,10))
            setTopSerials(arrResponseJson[1].items.slice(0,10))
        } catch (e) {
            console.log("init: ", e)
        } finally {
            setFetching(true)
        }
    }

    useEffect(() => {
        init()
    }, [])

    return(
        <>
            <main style = {{margin: 0}}>
                <div className="main-screen">
                    <div className="main-container">
                        <div className="info">
                            <h1><strong>ReFilms</strong> &mdash; лучший онлайн кинотеатр страны</h1>
                            <h2>Оформите подписку за <span>299р</span> и получите доступ<br /> ко всем фильмам и сериалам</h2>
                            <Link className = "button-to-form-page" to = "/formPage" >
                                <p>Оформить подписку</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className = "best-of-this-year">
                    <div className = "main-container">
                        <h3>Лучшие фильмы 2021</h3>
                        <Slider {...sliderSetting} className = "best-of-this-year-films">
                            {
                                fetching ?
                                topFilms.map( obj => (
                                    <FilmCart 
                                        key = {obj.kinopoiskId} 
                                        id = {obj.kinopoiskId} 
                                        name = {obj.nameRu} 
                                        poster = {obj.posterUrlPreview} 
                                        rating = {obj.ratingKinopoisk}
                                        countries = {obj.countries} 
                                        genres = {obj.genres}
                                        year = {obj.year}
                                        active = {false} />
                                ))
                                : Array(10).fill(0).map((_, index) => <FilmLoading key = {index}/>)
                            }
                        </Slider>
                        <h3>Лучшие сериалы 2021</h3>
                        <Slider {...sliderSetting} className = "best-of-this-year-serials">
                            {
                                fetching ?
                                topSerials.map( obj => (
                                    <FilmCart 
                                        key = {obj.kinopoiskId} 
                                        id = {obj.kinopoiskId} 
                                        name = {obj.nameRu} 
                                        poster = {obj.posterUrlPreview} 
                                        rating = {obj.ratingKinopoisk}
                                        countries = {obj.countries} 
                                        genres = {obj.genres}
                                        year = {obj.year}
                                        active = {false} />
                                ))
                                : Array(10).fill(0).map((_, index) => <FilmLoading key = {index}/>)
                            }
                        </Slider>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;