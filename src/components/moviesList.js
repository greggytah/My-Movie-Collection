import React from 'react';
import {Table, Button, FormControl, Jumbotron} from "react-bootstrap";
import { Subscribe } from "unstated";
import MoviesContainer from '../containers/moviesContainer';
import axios from "axios";
import { Link } from 'react-router-dom';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            currentQuery: ''
        };
        this.retrieveMovies = this.retrieveMovies.bind(this)
    }

    retrieveMovies() {
        return axios
            .get('/getMovies')
            .then(resp => {
                this.setState({
                    movies: resp.data.data,
                })
            })
            .catch(err =>
                console.log('ERROR retrieving movies: ', err.message)
            );
    }

    componentWillMount() {
        return this.retrieveMovies();
    }

    render() {
        return (
            <Subscribe to={[MoviesContainer]}>
                {actions =>
                 <div>
                     <p>
                         <Link to={{pathname: "/searchMovies", state: {movies: this.state.movies}}}>Search for Movies</Link>
                     </p>
                    <Table striped border='true' hover>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Genre</th>
                            <th>Actors</th>
                            <th>Rating</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.movies && this.state.movies.length > 0 ? this.state.movies.map(movie => {
                            return (<tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.year}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.actors}</td>
                                <td>{movie.rating}</td>
                                <td>
                                    <Button onClick={() =>
                                        actions.removeMovie(movie)
                                            .then(() => {
                                                console.log('Movie removed successfully!');
                                                return this.retrieveMovies();
                                            })
                                        }
                                        variant="outline-dark"><i className="fas fa-trash-alt" />
                                    </Button>
                                </td>
                                <td>
                                    <Link to={{pathname: "/editMovie", state: {movie}}}><i className="fas fa-edit" /></Link>
                                </td>
                            </tr> )
                        }) : null}
                        </tbody>
                    </Table>
                 </div>
                }
            </Subscribe>
        )
    }
}

export default MoviesList;