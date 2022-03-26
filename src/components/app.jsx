import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import MovieEntry from "./MovieEntry";
import MoviesContainer from "./MoviesContainer";
// import styles from './styles.css';

const e = React.createElement;

const App = () => {
    return (
        <div style={{backgroundColor: "#00D7FF", display: 'flex', flexDirection: 'column' }}>
            <div style={{font: 'normal normal bold 80px/66px Arial', textAlign: 'center', textTransform: 'uppercase', fontSize: '50px', width: '600px', margin: 'auto', paddingTop: '114px', paddingBottom: '95px'}}>Explore your next Movies and TV shows</div>
            <MoviesContainer/>
        </div>
    );
}

const domContainer = document.querySelector('#my_app_container');
ReactDOM.render(e(App), domContainer);
