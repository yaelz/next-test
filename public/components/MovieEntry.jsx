import React from "react";

const MovieEntry = ({movie}) => {
    return (
        <div style={{maxWidth: '200px', padding: '15px', margin: 'auto', textAlign: 'center', verticalAlign: 'center'}}>
            <img src={movie.image}/>
            <div style={{font: 'normal normal normal 30px/31px Georgia', textTransform: 'titlecase'}} key={`title${movie.id}`}>{movie.title}</div>
        </div>
    )
}

export default MovieEntry;