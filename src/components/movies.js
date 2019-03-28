import React from 'react';
import MoviesList from './moviesList';

class Movies extends React.Component {


    render() {
        return (
            <div className="wrapper text-center">
                <h2>My Movie Collection</h2>
                <MoviesList />
            </div>
        )
    }
}

export default Movies;