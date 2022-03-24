import React from 'react';
import ReactDOM from 'react-dom'

const e = React.createElement;

const LikeButton = () => {
    return (
        <button onClick={() => console.log('YASSSSSSssssddddereee')}>
            Like
        </button>
    );
}

const domContainer = document.querySelector('#my_app_container');
ReactDOM.render(e(LikeButton), domContainer);
