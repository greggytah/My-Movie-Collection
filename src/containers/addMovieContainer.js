import { Container } from 'unstated';
import axios from 'axios';

export default class AddMovieContainer extends Container {
    constructor() {
        super()
    }

    addNewMovie(newMovie) {

        return axios.post('/addMovie', newMovie)
            .catch(error =>
                console.error(`There was an error adding the movie to the db: ${error.message}`)
            );
    }

}
