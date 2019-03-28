// Migration of movies table

exports.up = function(knex, Promise) {
  return (
      Promise.all([
          knex.schema.createTable('movies', table => {
              table.increments('id').primary();
              table.string('title');
              table.string('actors');
              table.string('genre');
              table.integer('year');
              table.string('rating');
              table.unique(['title', 'year']) // movie title is unique per year
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
