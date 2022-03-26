import React from "react";

const MovieEntry = ({movie}) => {
    return (
        <div style={{maxWidth: '200px', paddingRight: '15px', margin: 'auto', textAlign: 'center', verticalAlign: 'center'}}>
            <img src={movie.image}/>
            <div style={{font: 'normal normal normal 24px/30px Georgia', textTransform: 'titlecase', textAlign: 'start'}} key={`title${movie.id}`}>{`${movie.title} (${movie.released})`}</div>
            <div style={{font: 'normal normal normal 24px/30px Arial', textAlign: 'start'}}>{`${movie.rating}`}</div>
        </div>
    )
}

export default MovieEntry;