import React,  {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { FilmSection } from 'components/pages/film-page/FilmSection'
import { BackButton } from 'components/common/BackButton'

import { fetchClient } from 'api/fetchClient'

export const FilmPage = () => {

    const {id} = useParams();

    const [filmCart, setFilmCart] = useState({})
    const [images, setImages] = useState([])
    const [fetching, setFetching] = useState(false)

    const init = async () => {
        try {
            setFetching(false)
            const arrApi = fetchClient("FILM_PAGE", id)
            const arrResponces = await Promise.allSettled(arrApi)
            const arrRequestJson = arrResponces
                .filter(response => response.status === "fulfilled")
                .map(response =>  response.value.json())
            const arrResponseJson = await Promise.all(arrRequestJson)
            setFilmCart(arrResponseJson[0])
            setImages(arrResponseJson[1].items.slice(0,6))
        } catch (e) {
            console.log("init: ", e)
        } finally {
            setFetching(true)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Страница фильма"
        init()
    }, [])

    useEffect(() => {
        document.title = `${filmCart.nameRu}
        (${filmCart.serial 
            ? filmCart.year + "-" + 
                (filmCart.endYear === null 
                ? "..." 
                : filmCart.endYear)
            : filmCart.year})`
    }, [fetching === true])

    return (
        <>
            <main>
                <div name = "top" className = "main-container">
                    <BackButton>Назад</BackButton>
                    <h3>
                        {
                            filmCart.serial === "serials" 
                            ? "Сериалы" 
                            : "Фильмы"
                        }
                    </h3>
                    {
                        fetching &&
                        <FilmSection 
                            filmCart = {filmCart}
                            images = {images}
                        />  
                    }     
                </div>
            </main>
        </>

    )
}