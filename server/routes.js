// Contains server routes for database actions

const movies = require('./controllers/movieActions');

module.exports = server => {
    server.get('/getMovies', movies.getAllMovies);
    server.post('/addMovie', movies.addMovie);
    server.get('/findMovie', movies.findMovie);
    server.get('/getMovie/:movieId', movies.getMovie);
    server.delete('/removeMovie/:movieId', movies.removeMovie);
    server.put('/updateMovie/:movieId', movies.updateMovie);
};