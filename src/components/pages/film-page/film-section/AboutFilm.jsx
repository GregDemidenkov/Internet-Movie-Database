import React from 'react'

export const AboutFilm = ({
    serial,
    year,
    countries,
    genres,
    slogan,
    filmLength,
}) => {

    const formatTime = (filmLength) => {
        let hours = Math.trunc(filmLength/60);
        let minutes = filmLength % 60;
        return hours + ':' + (minutes < 10 ? minutes.toString() + '0' : minutes);
    }

    return (
        <div className = "about-film">
            <h3>
                {
                    serial 
                    ? "О сериале:" 
                    : "О фильме:"
                }
            </h3>
            <table>
                <tbody>
                    <tr>
                        <th className = "parametr">Год производства</th>
                        <th className = "value">{year}</th>
                    </tr>
                    <tr>
                        <th className = "parametr">Страна</th>
                        <th className = "value">
                            {
                                countries.map((obj, index) => (
                                    index != (countries.length - 1) 
                                    ? `${obj.country}, ` 
                                    : obj.country
                                ))
                            }
                        </th>
                    </tr>
                    <tr>
                        <th className = "parametr">Жанр</th>
                        <th className = "value">
                            {
                                genres.map((obj, index) => (
                                    index != (genres.length - 1) 
                                    ? obj.genre + ', ' 
                                    : obj.genre
                                ))
                            }
                        </th>
                    </tr>
                    <tr>
                        <th className = "parametr">Слоган</th>
                        <th className = "value">{slogan === null ? "—" : '"' + slogan + '"'} </th>
                    </tr>
                    {
                        filmLength != null
                        ? <tr>
                            <th className = "parametr">Время</th>
                            <th className = "value">{filmLength} мин. / {formatTime(filmLength)}</th>
                        </tr>
                        : <></>
                    }
                </tbody>
            </table>
        </div>
    )
}