exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_movie').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_movie').insert({
          user_id: 1,
          movie_id: 1
        }),
        knex('user_movie').insert({
          user_id: 1,
          movie_id: 5
        }),
        knex('user_movie').insert({
          user_id: 1,
          movie_id: 2
        }),
        knex('user_movie').insert({
          user_id: 2,
          movie_id: 2
        }),
        knex('user_movie').insert({
          user_id: 3,
          movie_id: 3
        }),
        knex('user_movie').insert({
          user_id: 4,
          movie_id: 4
        }),
        knex('user_movie').insert({
          user_id: 5,
          movie_id: 4
        }),
        knex('user_movie').insert({
          user_id: 5,
          movie_id: 4
        })
      ]);
    });
};
