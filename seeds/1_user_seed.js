exports.seed = function(knex, Promise) {
    return knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 6')
  .then(function() {
    return knex('user').del();
  })
    .then(function () {
      return Promise.all([
        knex('user').insert({
          id: 1,
          username: 'Bradford',
          password: '$2a$08$taCYpBHq9XiEhy/22QHTe.keZ.n7HgzLBpHCC.BwQxyRwmkgab9em'
        }),
        knex('user').insert({
          id: 2,
          username: 'Laney',
          password: '$2a$08$TkbvqEdtrsuFK95UIkAvJuke2c2vG4o8YTWn9M.wllrqpwyd0xyDm'
        }),
        knex('user').insert({
          id: 3,
          username: 'Lucas',
          password: '$2a$08$2l41Jmb3FiLTD36KOfTLduPuGIAKT7R5T4Med7N42rBH/ymZtIMyu'
        }),
        knex('user').insert({
          id: 4,
          username: 'Will',
          password: '$2a$08$V2irre1S2NdhYDOXV1SKNOulHtEEHPOwT80Nz2HVQkQCH9vmIiqBK'
        }),
        knex('user').insert({
          id: 5,
          username: 'Pawel',
          password: '$2a$08$FhMIXZSubetbtoyxGIPKTO.DtFkZygW2h/v0l89SNFC.CHneWNw/u'
        })
      ]);
  });
};
