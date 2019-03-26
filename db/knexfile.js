// Database configuration using knex

module.exports = {

  development: {
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
    }
  }

};
