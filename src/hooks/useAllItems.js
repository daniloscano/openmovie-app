import {useState} from "react";

const TRENDING_ENDPOINT = 'https://api.themoviedb.org/3/trending/all/';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTliODgyNGU4ZDRiZGQwOWM2YzcwYWRjM2I3N2M5MyIsIm5iZiI6MTc0Mjk0Mjg0Mi43MjIsInN1YiI6IjY3ZTMzMjdhNGM1Mjc0NjY2NWRjYjhkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTkgjg-aFkrd4r4k39YkHgUfLuPaH3SICs-Z5SpH8G0'
const LANGUAGE = 'language=it-IT';
const HEADERS = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    }
};

export const useAllItems = () => {
    const [ items, setItems ] = useState([])
    const [ page, setPage ] = useState(0)
    const [ totalPages, setTotalPages ] = useState(0)
    const [ error, setError ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const getTrendings = async (timeWindow = 'week', page = 1) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${TRENDING_ENDPOINT}${timeWindow}?page=${page}&${LANGUAGE}`, HEADERS);
            const data = await response.json()
            setItems(data.results)
            setPage(data.page)
            setTotalPages(data.total_pages)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }


    return { items, page, totalPages, error, isLoading, getTrendings }
}