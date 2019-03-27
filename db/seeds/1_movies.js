exports.seed = function(knex) {
    // Deletes ALL existing entries
    return (
        knex('movies')
        // .del()
            .then(() =>
                // Inserts seed entries
                knex('movies').insert([
                    {
                        title: 'The Lost Boys',
                        actors: 'Corey Feldman, Corey Haim, Jason Patric, Jamie Gertz',
                        genre: 'Horror',
                        year: 1987,
                        rating: 'R'
                    },
                    {
                        title: 'Jaws',
                        actors: 'Roy Scheider, Robert Shaw, Richard Dreyfuss',
                        genre: 'Horror',
                        year: 1975,
                        rating: 'PG'
                    },
                    {
                        title: 'Back to the Future',
                        actors: 'Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover',
                        genre: 'Science Fiction',
                        year: 1985,
                        rating: 'PG'
                    },
                    {
                        title: 'Chinatown',
                        actors: 'Jack Nicholson, Faye Dunaway, John Huston',
                        genre: 'Film Noir',
                        year: 1974,
                        rating: 'R'
                    },
                    {
                        title: 'Election',
                        actors: 'Reese Witherspoon, Matthew Broderick, Chris Klein',
                        genre: 'Comedy',
                        year: 1999,
                        rating: 'R'
                    }
                ])
            )
    );
};