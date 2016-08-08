exports.seed = function(knex, Promise) {
    return knex.raw('ALTER SEQUENCE movie_id_seq RESTART WITH 6')
  .then(function() {
    return knex('movie').del();
  })
    .then(function () {
      return Promise.all([
        knex('movie').insert({
          id: 1,
          title: 'Whiplash',
          description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
          year: 2014,
          image_url: 'http://ia.media-imdb.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
          rating: 10
        }),
        knex('movie').insert({
          id: 2,
          title: 'Pulp Fiction',
          description: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          year: 1994,
          image_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTw3ZgtSEm8Xp05KVoWkIi-tU3K7NE-tgZQ3ZeEPurFnHq0T0vc',
          rating: 10
        }),
        knex('movie').insert({
          id: 3,
          title: 'The Imitation Game',
          description: "During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians.",
          year: 2014,
          image_url: 'http://ia.media-imdb.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
          rating: 10
        }),
        knex('movie').insert({
          id: 4,
          title: 'Interstellar',
          description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          year: 2014,
          image_url: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_UY1200_CR69,0,630,1200_AL_.jpg',
          rating: 10
        }),
        knex('movie').insert({
          id: 5,
          title: 'The Theory of Everything',
          description: "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
          year: 2014,
          image_url: 'http://www.impawards.com/intl/uk/2014/posters/theory_of_everything.jpg',
          rating: 10
        })
      ]);
  });
};
