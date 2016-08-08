exports.seed = function(knex, Promise) {
        return knex.raw('TRUNCATE user_movie, movie, "user" RESTART IDENTITY CASCADE')
      .then(function() {
        return knex('user_movie').del()
      .then(function() {
        return knex('movie').del()
      .then(function() {
        return knex('user').del();
      });
    });
  });
};
