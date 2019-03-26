// Export the database to be used across the entire application

const knexfile = require('knexfile');
const env = 'development';
const knex = require('knex')(knexfile[env]);

module.exports = {
    knex
};