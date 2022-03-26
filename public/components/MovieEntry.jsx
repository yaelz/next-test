import React from "react";

const MovieEntry = ({movie}) => {
    return (
        <div style={{width: '200px', paddingRight: '15px', margin: 'auto', textAlign: 'center', verticalAlign: 'center'}}>
            <img src={movie.image}/>
            <div style={{font: 'normal normal normal 24px/30px Georgia', textTransform: 'titlecase', textAlign: 'start'}} key={`title${movie.id}`}>{`${movie.title} (${movie.released})`}</div>
            <div style={{font: 'normal normal normal 24px/30px Arial', textAlign: 'start'}}>{`${movie.rating}`}</div>
            <button style={{border: '1px solid #000000', borderRadius: '100px', opacity: 1, font: 'normal normal normal 16px/20px Georgia', width: '100%', marginTop: '19px', backgroundColor: 'transparent', textAlign: 'left', paddingLeft: '12px'}}>Read more</button>
        </div>
    )
}

export default MovieEntry;