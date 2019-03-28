import { Container } from 'unstated';
import axios from 'axios';

export default class MoviesContainer extends Container {
    constructor() {
        super()
    }

    removeMovie(movie) {
        const movieId = movie.id;

        return axios
            .delete(`/removeMovie/${movieId}`)
                .then(response => {
                    return response;
                })
                .catch(err => {
                    console.log('ERROR removing movie: ', err.message)
                })
    }

}
