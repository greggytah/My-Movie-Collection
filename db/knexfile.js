// Database configuration using knex

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'movie_collection',
      user: 'greggmoore',
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
    seeds: {
      directory: './seeds',
    }
  }

};
