import React from 'react';
import ReactDOM from 'react-dom'

const e = React.createElement;

const LikeButton = () => {
    return (
        <button onClick={() => console.log('YASSSSSS')}>
            Like
        </button>
    );
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

alert('YAELLLL')