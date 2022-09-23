import React,  {useState, useEffect} from 'react'

import { BasePage } from 'components/common/BasePage'

import { fetchClient } from 'api/fetchClient'

export const Films = () => {

    const [items, setItems] = useState([]);
    const [fetching, setFetching] = useState(false)

    const init = async () => {
        try {
            setFetching(false)
            const arrApi = fetchClient("FILMS_PAGE")
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
        } catch (e) {
            console.log("init: ", e)
        } finally {
            setFetching(true)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Фильмы"
        init()
    }, [])

    return (
        <BasePage 
            itemsList = {items}
            page = {"/films"}
        />
    );
    
}