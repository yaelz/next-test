import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllMovies from "./AllMovies";

const MoviesContainer = () => {
    const [movies, setMovies] = useState([]);
    const [movieIdSearch, setMovieIdSearch] = useState('aaa');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/movies');
            console.log('YAEL NO THIS IS HAPPENING MORE THAN ONCE')
            setMovies(response.data);
        }

        fetchData()
            .catch(console.error);
    }, [])

    const searchByMovieId = async () => {
        console.log('************** movieIdSearch: ', movieIdSearch)
        const response = await axios.get(`/movies/${movieIdSearch}`);
        console.log('********* response.data: ', response.data);
        setMovies(response.data);
    }

    // const searchByTitle = async word => {
    //     const response = await axios.get(`/movies/title/${word}`);
    //     console.log('********* response.data: ', response.data);
    //     setMovies(response.data);
    // }

    console.log('*********** movieIdSearch: ', movieIdSearch)

    // const searchByYear = async word => {
    //     const response = await axios.get(`/movies/${movieId}`);
    //     console.log('********* response.data: ', response.data);
    //     setMovies(response.data);
    // }

    return (
        <>
            <form onSubmit={e => {e.preventDefault(); searchByMovieId()}}>
                <label>
                    Search by ID:
                    <input type="text" value={movieIdSearch} onChange={(e) => {
                        console.log('============== e: ', e)
                        e.preventDefault();
                        setMovieIdSearch(e.target.value)
                    }} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {/*<form onSubmit={e => {e.preventDefault(); searchByTitle(e)}}>*/}
            {/*    <label>*/}
            {/*        Search by ID:*/}
            {/*        <input type="text" value={movieIdSearch} onChange={(e) => {*/}
            {/*            console.log('============== e: ', e)*/}
            {/*            e.preventDefault();*/}
            {/*            setMovieIdSearch(e.target.value)*/}
            {/*        }} />*/}
            {/*    </label>*/}
            {/*    <input type="submit" value="Submit" />*/}
            {/*</form>*/}
            <AllMovies movies={movies}></AllMovies>
        </>
    );
}

export default MoviesContainer;
