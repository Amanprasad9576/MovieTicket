
const { Movie } = require('../models');

const crudRepository = require('./crud-repository');

const movieRepository = crudRepository(Movie);

console.log("Movie Repository:", movieRepository);

console.log(movieRepository.create);

module.exports = movieRepository;


