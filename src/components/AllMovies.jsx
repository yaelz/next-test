import React from 'react'
import MovieEntry from "./MovieEntry";

const AllMovies = ({movies}) => {
    return (<div style={{display: 'flex', flexWrap: 'wrap', paddingLeft:'60px', paddingRight:'60px'}}>
        {movies && movies.map((movie) => (
            <MovieEntry key={movie.id} movie={movie}/>
        ))}
    </div>)
}

export default AllMovies;