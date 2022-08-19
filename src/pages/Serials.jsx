import React,  {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import arrComeBack from '../img/come-back.svg'
import {FilmCart} from '../components'

function Serials() {
    
    const [serials, setSerials] = useState([]);
    const [fetching, setFetching] = useState(false)

    let arr = [];

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    useEffect(() => {
        const arrApi = [
            fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=TV_SERIES&page=1', {
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
            setSerials([...serials, ...arr])
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
                    <h3>Сериалы</h3>
                    <div className = "serials-list">
                        {
                            
                            serials.map( obj => 
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

export default Serials;