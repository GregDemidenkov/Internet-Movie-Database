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
                'X-API-KEY': '6e0c4cd5-64e2-412d-ba16-21a38ab9e342',
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(json => {
            setFilmCart(json)
            setFetching(true)
        })

    }, [])

    const formatTime = (filmLength) => {
        let hours = Math.trunc(filmLength/60);
        let minutes = filmLength % 60;
        return hours + ':' + (minutes < 10 ? minutes.toString() + '0' : minutes);
    }

    console.log(filmCart);

    return (
        /* 
        <main>
            <GoBack />
            <Content /> // тут в нем еще отдельный компонент таблицы будет
            <Synpopsis />
            <Rating />
        </main>
        Таблицу вынеси в отдельный компонент
        Дроби свои страницы на компоненты, это улучшает производительность и перерисовку экрана
        */
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
                                <h1 className = "name__ru">{filmCart.nameRu} ({filmCart.serial ? filmCart.year + "-" + filmCart.endYear : filmCart.year})</h1>
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
                                        {
                                            !filmCart.serial ?
                                            <tr>
                                                <th className = "parametr">Время</th>
                                                <th className = "value">{filmCart.filmLength} мин. / {formatTime(filmCart.filmLength)}</th>
                                            </tr>
                                            : <></>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className = "synopsis">
                        <h2>Синопсис:</h2>
                        <p>{filmCart.description || filmCart.shortDescription}</p>
                    </div>
                    <div className = "raiting-and-watch">
                        <h2>Оценка: <span>{filmCart.ratingKinopoisk}/10</span></h2>
                        <a className = "button button_watch" href = {filmCart.webUrl} target="_blank" rel="noreferrer">
                            <p>Смотреть</p>
                            <img src = {watch} alt = "" />
                        </a>
                    </div>
                </div>
            </main>
        </>

    )
}

export default FilmPage