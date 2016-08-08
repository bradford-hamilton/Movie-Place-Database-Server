
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table) {
    table.increments();
    table.string('title');
    table.text('description');
    table.integer('year');
    table.string('image_url');
    table.integer('rating');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movie');
};
