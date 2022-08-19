import React,  {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import arrComeBack from '../img/come-back.svg'
import {FilmCart} from '../components'


function Films() {

    const [films, setFilms] = useState([]);
    const [fetching, setFetching] = useState(false)

    let arr = [];

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    useEffect(() => {
        const arrApi = [
            fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=1', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                    'Content-Type': 'application/json',
                },
            }),
        ]
        Promise.all(arrApi)
        .then(allResponse => {
            allResponse.forEach(res => {
                res.json().then(json => arr = [...arr, ...json.items]);
            })
            console.log(arr);
            setFilms([...films, ...arr])
            setFetching(true)
        })

    }, [])
    

    return(
        <>
            <main>
                <div className = "main-container">
                    <a onClick = {goBack} className = "come-back" href="#">
                        <img src = {arrComeBack} alt="" />
                        <p>Назад</p>
                    </a>
                    <h3>Фильмы</h3>
                    <div className = "films-list">
                        {
                            films.map( obj => 
                                fetching &&
                                <FilmCart 
                                    key = {obj.kinopoiskId} 
                                    id = {obj.kinopoiskId} 
                                    name = {obj.nameRu}
                                    poster = {obj.posterUrlPreview}
                                    rating = {obj.ratingKinopoisk} 
                                />

                            )
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Films;




// fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=2', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=3', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=4', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=5', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=6', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=7', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=8', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=9', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=10', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=11', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // }),
            // fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&page=12', {
            //     method: 'GET',
            //     headers: {
            //         'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
            //         'Content-Type': 'application/json',
            //     },
            // })