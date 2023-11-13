
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['qPgTt65l38HKd/y8vegD/A==','D7jzpkYY9QcM/sAqbdjV7A==','WfkVHi3o9aeDr5hg6G9M+Q==','8CSN1HEdbA5p9agNeh2e5w=='],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
