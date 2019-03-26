// Export the database to be used across the entire application
const knex = require('knex')({
    dev: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'movie_collection',
            user: 'postgres',
            password: 'master'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations',
        },
        debug: false
    }
});

module.exports = {
    knex
};