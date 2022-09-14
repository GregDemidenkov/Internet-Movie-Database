import React,  {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { FilmSection } from 'components/pages/film-page/FilmSection'
import { BackButton } from 'components/common/BackButton'
import { paths } from 'routing/config'

export const FilmPage = () => {

    const {id} = useParams();

    const [filmCart, setFilmCart] = useState({})
    const [images, setImages] = useState([])
    const [fetching, setFetching] = useState(false)

    const init = async () => {
        try {
            setFetching(false)
            const arrApi = [
                fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                        'Content-Type': 'application/json',
                    }
                }),
                fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`, {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': 'b35699f3-c603-42ae-96bc-590164f9c971',
                        'Content-Type': 'application/json',
                    },
                }),
            ]
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
        init()
    }, [])

    return (
        <>
            <main>
                <div name = "top" className = "main-container">
                    <BackButton path = {filmCart.serial ? "/" + paths.serials : "/" + paths.films}>Назад</BackButton>
                    <h3>
                        {
                            filmCart.serial 
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