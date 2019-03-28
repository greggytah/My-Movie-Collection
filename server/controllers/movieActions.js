const db = require('../../db/db').knex;

function getAllMovies(req, res) {
    db.select('*').from('movies')
        .then((movies) => {
            if(!movies.length) {
                res.send({
                    status: 1,
                    message: 'No movies found'
                })
            } else {
                res.status(200).send({
                    data: movies,
                    count: movies.length
                })
            }
        })
        .catch(error => {
            console.error('Error fetching movies: ', error);
            res.send(new Error('Error fetching movies'))
        })
}

function addMovie(req, res) {
    const title = req.body.title;
    const genre = req.body.genre;
    const actors = req.body.actors;
    const year = req.body.year;
    const rating = req.body.rating;

    db('movies').insert({ title, genre, actors, year, rating })
        .then((movie) => {
            res.status(201).send({
                data: movie
            })
        })
        .catch(error => {
            console.error('Error adding movie: ', error);
            res.send(new Error('Error adding movie'))
        })
}

function getMovie(req, res) {
    const movieId = req.params.id;

    db('movies')
        .where({id: movieId})
        .then((movie) => {
            res.status(201).send({
                data: movie
            })
        })
        .catch(error => {
            console.error('Error retrieving movie: ', error);
            res.send(new Error('Error retrieving movie'))
        })

}

function removeMovie(req, res) {
    const id = req.params.movieId;

    db('movies')
        .where({ id })
        .del()
        .then((response) => {
            res.status(200).send('Movie successfully deleted')
        })
        .catch(error => {
            console.error('Error removing movie: ', error);
            res.send(new Error('Error removing movie'))
        })
}

function updateMovie(req, res) {
    const id = req.params.movieId;
    const movieData = {
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year,
        actors: req.body.actors,
        rating: req.body.rating
    };

    db('movies')
        .where({ id })
        .update({
            title: movieData.title,
            genre: movieData.genre,
            year: movieData.year,
            actors: movieData.actors,
            rating: movieData.rating
        })
        .then((response) => {
            res.status(201).send({
                data: response
            })
        })
        .catch(error => {
            console.error('Error updating movie: ', error);
            res.send(new Error('Error updating movie'))
        })
}

function findMovie(req, res) {
    const movieData = {
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year,
        actors: req.body.actors,
        rating: req.body.rating
    };

    db('movies')
        .where({
            title: movieData.title,
            genre: movieData.genre,
            year: movieData.year,
            actors: movieData.actors,
            rating: movieData.rating
        })
        .then((response) => {
            if(!response.length) {
                res.send({
                    status: 1,
                    message: 'No movies found'
                })
            } else {
                res.status(200).send({
                    data: response,
                    count: response.length
                })
            }
        })
        .catch(error => {
            console.error('Error searching movies: ', error);
            res.send(new Error('Error searching movies'))
        })
}

module.exports = {
    getAllMovies,
    addMovie,
    getMovie,
    removeMovie,
    updateMovie,
    findMovie,
};

