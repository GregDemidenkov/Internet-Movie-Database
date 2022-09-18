const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

export const esscenseList = (params, additionalUrl, page) => {
    let filtration = "";
    if(params != {}) {
        filtration = Object.keys(params).map(key => key + "=" + params[key]).join("&");
    }
    let url = baseUrl + additionalUrl + (params != 0 ? "?" : "")
    return url + filtration + (page != 0 ? `&page=${page}` : "")
}
