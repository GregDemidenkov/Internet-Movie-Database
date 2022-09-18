import { esscenseList } from "./requests";
import { headers } from "./apiClient";

export const fetchClient = (type, id) => {
    switch (type) {
        case "FILMS_PAGE": {
            const params = {
                'order': "NUM_VOTE",
                'type': "FILM",
            }
            return [
                fetch(esscenseList(params, "", 1), {
                    method: 'GET',
                    headers,
                }),
                fetch(esscenseList(params, "", 2), {
                    method: 'GET',
                    headers,
                }),
                fetch(esscenseList(params, "", 3), {
                    method: 'GET',
                    headers,
                }),
            ];
        }
        case "SERIALS_PAGE": {
            const params = {
                'order': "NUM_VOTE",
                'type': "TV_SERIES",
            }
            return [
                fetch(esscenseList(params, "", 1), {
                    method: 'GET',
                    headers,
                }),
                fetch(esscenseList(params, "", 2), {
                    method: 'GET',
                    headers,
                }),
                fetch(esscenseList(params, "", 3), {
                    method: 'GET',
                    headers,
                }),
            ];
        }
        case "MAIN_PAGE": {
            const paramsFilms = {
                'order': "RATING",
                'type': "FILM",
                'yearFrom': "2021",
                'yearTo': "2021"
            }
            const paramsSerials = {
                'order': "RATING",
                'type': "TV_SERIES",
                'yearFrom': "2021",
                'yearTo': "2021"
            }
            return [
                fetch(esscenseList(paramsFilms, "", 1), {
                    method: 'GET',
                    headers,
                }),
                fetch(esscenseList(paramsSerials, "", 2), {
                    method: 'GET',
                    headers,
                }),
            ];
        }
        case "FILM_PAGE": {
            const params = {
                'type': "STILL",
            }
            return [
                fetch(esscenseList({}, `/${id}`, 0), {
                    method: 'GET',
                    headers,
                }),
                fetch(esscenseList(params, `/${id}/images`, 1), {
                    method: 'GET',
                    headers,
                }),
            ];
        }
        default:
            break;
    }
}

