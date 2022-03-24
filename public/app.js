import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

const e = React.createElement;

const LikeButton = () => {
    const [movies, setMovies] = useState({a: 1, b:0});

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/movies');
            console.log('******* data: ', data);
        }

        fetchData()
            .catch(console.error);
    }, [])

    return (
        <>
            <div>{movies.a}</div>
            <div>{movies.b}</div>
        </>
    );
}

const domContainer = document.querySelector('#my_app_container');
ReactDOM.render(e(LikeButton), domContainer);
