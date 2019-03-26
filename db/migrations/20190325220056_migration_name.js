// Migration of movies table

exports.up = function(knex, Promise) {
  return (
      Promise.all([
          knex.schema.createTable('movies', table => {
              table.increments('id').primary();
              table.string('title');
              table.json('actors');
              table.string('genre');
              table.integer('year');
              table.string('rating');
          }),
      ])
  )
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema
          .dropTableIfExists('movies')
  ]);
};
