import React,  {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import {FilmCart} from '../components'

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

    useEffect(() => {
        const arrApi = [
            fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=FILM&yearFrom=2021&yearTo=2021&page=2', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                    'Content-Type': 'application/json',
                },
            }),
            fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SERIES&yearFrom=2021&yearTo=2021&page=2', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                    'Content-Type': 'application/json',
                },
            }),
        ]
        Promise.all(arrApi)
        .then(allResponse => {
            allResponse[0].json().then(json => setTopFilms(json.items.slice(0,10)))
            allResponse[1].json().then(json => setTopSerials(json.items.slice(0,10)))
            setFetching(true)
        })

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
                                fetching &&
                                topFilms.map((obj) => (
                                    <FilmCart 
                                        key = {obj.kinopoiskId} 
                                        id = {obj.kinopoiskId} 
                                        name = {obj.nameRu} 
                                        poster = {obj.posterUrlPreview} 
                                        rating = {obj.ratingKinopoisk} />
                                ))
                            }
                        </Slider>
                        <h3>Лучшие сериалы 2021</h3>
                        <Slider {...sliderSetting} className = "best-of-this-year-serials">
                            {
                                fetching &&
                                topSerials.map((obj) => (
                                    <FilmCart 
                                        key = {obj.kinopoiskId} 
                                        id = {obj.kinopoiskId} 
                                        name = {obj.nameRu} 
                                        poster = {obj.posterUrlPreview} 
                                        rating = {obj.ratingKinopoisk} />
                                ))
                            }
                        </Slider>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;