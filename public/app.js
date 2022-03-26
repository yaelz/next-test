import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
// import styles from './styles.css';

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
        <div style={{backgroundColor: "#00D7FF", display: 'flex', flexDirection: 'column' }}>
            <div style={{font: 'normal normal bold 80px/66px Arial', textAlign: 'center', textTransform: 'uppercase', fontSize: '50px', width: '600px', margin: 'auto'}}>Explore your next Movies and TV shows</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {movies && movies.map((movie) => (
                    <div key={movie.id} style={{maxWidth: '200px', padding: '15px', margin: 'auto', textAlign: 'center', verticalAlign: 'center'}}>
                        <img key={`image${movie.id}`} src={movie.image}/>
                        <div style={{font: 'normal normal normal 30px/31px Georgia', textTransform: 'titlecase'}} key={`title${movie.id}`}>{movie.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const domContainer = document.querySelector('#my_app_container');
ReactDOM.render(e(App), domContainer);
