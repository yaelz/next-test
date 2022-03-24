import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';

const e = React.createElement;

const App = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/movies');
            setMovies(response.data);
        }

        fetchData()
            .catch(console.error);
    }, [])


    return (
        <div>{movies && movies.map((movie) => (
            <div key={movie.id}>
                <div key={`title${movie.id}`}>{movie.title}</div>
                <img key={`image${movie.id}`} src={movie.image}/>
            </div>
        ))}</div>
    );
}

const domContainer = document.querySelector('#my_app_container');
ReactDOM.render(e(App), domContainer);
