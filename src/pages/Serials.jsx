import React,  {useState, useEffect} from 'react'

import { BasePage } from 'components/common/BasePage'

import { esscenseList } from 'api/requests'
import { headers } from 'api/apiClient'


export const Serials = () => {
    
    const [items, setItems] = useState([]);
    const [fetching, setFetching] = useState(false)

    const init = async () => {
        try {
            setFetching(false)
            // fetchClient.get(url, params: { type: 'FILM', page: 1 })
            const makeDinamicQueryString = (headers) => {
                // ['type', 'page']
                const baseUri = ""
                const paramsString = Object.keys(headers).map(key => key + "=" + headers['key']).join("&")
                return baseUri+paramsString
                
            }
            const arrApi = [
                fetch(esscenseList({ type: "TV_SERIES" , page: 1 }), {
                    method: 'GET',
                    headers,
                }),
                
                fetch(esscenseList({ type: "TV_SERIES" , page: 2 }), {
                    method: 'GET',
                    headers,
                }),
                fetch(esscenseList({ type: "TV_SERIES" , page: 3 }), {
                    method: 'GET',
                    headers,
                }),
            ]
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
        init()
    }, [])


    return (
        <BasePage 
            itemsList = {items}
            page = {"serials"}
        />
    );
}

export default Serials;