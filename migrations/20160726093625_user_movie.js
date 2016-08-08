
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_movie', function(table) {
    table.increments();
    table.integer('user_id').references('user.id');
    table.integer('movie_id').references('movie.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_movie');
};
