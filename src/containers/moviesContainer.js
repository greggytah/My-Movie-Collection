import { Container } from 'unstated';
import axios from 'axios';

export default class MoviesContainer extends Container {
    constructor(props) {
        super(props)
    }

    fetchMovies() {
        return axios
            .get('/getMovies')
            .then(resp => {
                return resp.data;
            })
            .catch(err =>
                console.log('ERROR retrieving movies: ', err.message)
            );
    }
}
