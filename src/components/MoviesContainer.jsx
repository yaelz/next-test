import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllMovies from "./AllMovies";

const MoviesContainer = () => {
    const [movies, setMovies] = useState([]);
    const [movieIdSearch, setMovieIdSearch] = useState('');
    const [movieTitleSearch, setMovieTitleSearch] = useState('');
    const [movieYearSearch, setMovieYearSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/movies');
            setMovies(response.data);
        }

        fetchData()
            .catch(console.error);
    }, [])

    const searchByMovieId = async () => {
        const response = await axios.get(`/movies/${movieIdSearch}`);
        setMovies(response.data);
    }

    const reset = async () => {
        const response = await axios.get(`/movies`);
        setMovies(response.data);
    }

    const searchByTitle = async e => {
        const whyIsThisTheValue = e.target[0].value; // This is the value, why?? Should use forms in a better way
        console.log('********* e: ', whyIsThisTheValue);
        const response = await axios.get(`/movies/title/${whyIsThisTheValue}`);
        setMovies(response.data);
    }

    const searchByYear = async e => {
        const released = e.target[0].value
        const response = await axios.get(`/movies/released/${released}`);
        setMovies(response.data);
    }

    return (
        <>
            <form onSubmit={e => {e.preventDefault(); searchByMovieId()}}>
                <label>
                    Search By ID:
                    <input type="text" value={movieIdSearch} onChange={(e) => {
                        e.preventDefault();
                        setMovieIdSearch(e.target.value)
                    }} />
                </label>
                <input type="submit" value="Go!" />
            </form>
            <form onSubmit={e => {e.preventDefault(); searchByTitle(e)}}>
                <label>
                    Search By Title:
                    <input type="text" value={movieTitleSearch} onChange={(e) => {
                        e.preventDefault();
                        setMovieTitleSearch(e.target.value)
                    }} />
                </label>
                <input type="submit" value="Go!" />
            </form>
            <form onSubmit={e => {e.preventDefault(); searchByYear(e)}}>
                <label>
                    Search By Year:
                    <input type="text" value={movieYearSearch} onChange={(e) => {
                        e.preventDefault();
                        setMovieYearSearch(e.target.value)
                    }} />
                </label>
                <input type="submit" value="Go!" />
            </form>
            <form onSubmit={e => {e.preventDefault(); reset()}}><button style={{border: '1px solid #000000', borderRadius: '100px', opacity: 1, font: 'normal normal normal 16px/20px Georgia', marginTop: '19px', backgroundColor: 'white', textAlign: 'left', padding: '6px 12px', marginLeft: '15px', width: '250px'}}>TO RESET CLICK ME</button></form>
            <AllMovies movies={movies}></AllMovies>
        </>
    );
}

export default MoviesContainer;
