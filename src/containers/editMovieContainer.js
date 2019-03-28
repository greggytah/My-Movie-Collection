import { Container } from 'unstated';
import axios from 'axios';

export default class EditMovieContainer extends Container {
    constructor() {
        super()
    }

    updateMovie(movie) {
        const id = movie.id;
        return axios.put(`updateMovie/${id}`, movie)
            .catch(error =>
                console.error(`There was an error updating the movie in the db: ${error.message}`)
            );
    }

}
