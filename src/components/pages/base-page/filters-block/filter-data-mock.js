export const countries = [
    { value: 1, label: "Австралия" },
    { value: 2, label: "Австрия" },
    { value: 3, label: "Бельгия" },
    { value: 4, label: "Великобритания" },
    { value: 5, label: "Германия" },
    { value: 6, label: "Гонконг" },
    { value: 7, label: "Греция" },
    { value: 8, label: "Дания" },
    { value: 9, label: "Испания" },
    { value: 10, label: "Италия" },
    { value: 11, label: "Нидерланды" },
    { value: 12, label: "Норвегия" },
    { value: 13, label: "Россия" },
    { value: 14, label: "СССР" },
    { value: 15, label: "США" },
    { value: 16, label: "Турция" },
    { value: 17, label: "Франция" },
    { value: 18, label: "Швеция" },
    { value: 19, label: "Южная Корея" },
    { value: 20, label: "Япония" }
]

export const years = [
    { id: 1, label: "2022 год", arrYears: [2022, 2022] },
    { id: 2, label: "2021 год", arrYears: [2021, 2021] },
    { id: 3, label: "2020 год", arrYears: [2020, 2020] }, 
    { id: 4, label: "2019 год", arrYears: [2019, 2019] },
    { id: 5, label: "2015-2019", arrYears: [2015, 2019] },
    { id: 6, label: "2010-2015", arrYears: [2010, 2015] },
    { id: 7, label: "2000-2010", arrYears: [2000, 2010] },
    { id: 8, label: "1990-2000", arrYears: [1990, 2000] },
    { id: 9, label: "1980-1990", arrYears: [1980, 1990] },
    { id: 10, label: "до 1980", arrYears: [1900, 1980] } 
]

export const ratings = [
    { id: 1, label: "Больше 9", value: 9 },
    { id: 2, label: "Больше 8", value: 8 },
    { id: 3, label: "Больше 7", value: 7 },
    { id: 4, label: "Больше 6", value: 6 },
    { id: 5, label: "Больше 5", value: 5 }
]

export const genres = [
    { id: 1, label: "Драма" },
    { id: 1, label: "Боевик" },
    { id: 1, label: "Мелодрама" },
    { id: 1, label: "Комедия" },
    { id: 1, label: "Триллер" },
    { id: 1, label: "Ужасы" },
    { id: 1, label: "Фантастика" },
    { id: 1, label: "Фэнтези" },
    { id: 1, label: "Криминал" },
    { id: 1, label: "Приключения" },
    { id: 1, label: "Семейный" },
    { id: 1, label: "Мультфильм" }
]

export const filtersList = [
    {id: 1, filterName: "genre", filterList: genres, label: "Жанры"},
    {id: 1, filterName: "year", filterList: years, label: "Годы"},
    {id: 1, filterName: "country", filterList: countries, label: "Страны"},
    {id: 1, filterName: "rating", filterList: ratings, label: "Оценки"}
]