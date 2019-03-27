import React from 'react';
import axios from 'axios';
import MoviesList from './moviesList';

class Movies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        return axios
            .get('/getMovies')
            .then(resp => {
                console.log("RESPONSE: ", resp);
                this.setState({
                    movies: resp.data,
                })
            })
            .catch(err =>
                console.log('ERROR retrieving movies: ', err.message)
            );
    }

    render() {
        return (
            <div className="wrapper" style={{textAlign: 'center'}}>
                <h2>My Movie Collection</h2>
                <MoviesList movies={this.state.movies} />
            </div>
        )
    }
}

export default Movies;