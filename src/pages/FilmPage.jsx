import React,  {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import arrComeBack from '../img/come-back.svg'
import watch from '../img/watch.svg'



const FilmPage = () => {

    const {id} = useParams();

    const [filmCart, setFilmCart] = useState({})
    const [fetching, setFetching] = useState(false)

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(json => {
            setFilmCart(json)
            setFetching(true)
        })

    }, [])

    console.log(filmCart);

    return (
        <>
            <main>
                <div className = "main-container">
                    <a onClick = {goBack} className = "come-back" href = "#">
                        <img src = {arrComeBack} alt="" />
                        <p>Назад</p>
                    </a>
                    <h3>{filmCart.serial ? "Сериалы" : "Фильмы"}</h3>
                    <div className = "film-cart">
                        <div className = "film-cart__poster">
                            <img className = "poster_img" src = {filmCart.posterUrl} alt="" />
                        </div>
                        <div className = "film-cart__info">
                            <div className = "name">
                                <h1 className = "name__ru">{filmCart.nameRu} ({filmCart.year})</h1>
                                <p className = "name__en">{filmCart.nameOriginal} <span>{fetching && filmCart.ratingAgeLimits != null && filmCart.ratingAgeLimits.slice(3)}+</span></p>
                            </div>
                            <div className = "about-film">
                                <h2>{filmCart.serial ? "О сериале:" : "О фильме:"}</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className = "parametr">Год производства</th>
                                            <th className = "value">{filmCart.year}</th>
                                        </tr>
                                        <tr>
                                            <th className = "parametr">Страна</th>
                                            <th className = "value">
                                                {
                                                    fetching &&
                                                    filmCart.countries.map((obj, index) => (
                                                        index != (filmCart.countries.length - 1) ? `${obj.country}, ` : obj.country
                                                    ))
                                                }
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className = "parametr">Жанр</th>
                                            <th className = "value">
                                                {
                                                    fetching &&
                                                    filmCart.genres.map((obj, index) => (
                                                        index != (filmCart.genres.length - 1) ? obj.genre + ', ' : obj.genre
                                                    ))
                                                }
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className = "parametr">Слоган</th>
                                            <th className = "value">"{filmCart.slogan}"</th>
                                        </tr>
                                        <tr>
                                            <th className = "parametr">Время</th>
                                            <th className = "value">{filmCart.filmLength} мин./ 02:16</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className = "synopsis">
                                <h2>Синопсис:</h2>
                                <p>{filmCart.description || filmCart.shortDescription}</p>
                            </div>
                            <div className = "raiting-and-watch">
                                <h2>Оценка: <span>{filmCart.ratingKinopoisk}/10</span></h2>
                                <a className = "button button_watch" href = {filmCart.webUrl} target="_blank">
                                    <p>Смотреть</p>
                                    <img src = {watch} alt = "" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default FilmPage