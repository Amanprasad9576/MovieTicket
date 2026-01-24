const  MovieRepository  = require('../repositories/movie-repository');

console.log("MovieRepository in service:", MovieRepository);
console.log(MovieRepository.create);

const createMovie = async (movieData) => {
    try {
        const movie = await MovieRepository.create(movieData);
        console.log("Movie created successfully in service");
        return movie;
    } catch (error) {
        console.log('Error in movie service layer', error);
        throw error;
    }
};

const getMovie = async (movieId) => {
    try {
        const response = await MovieRepository.getById(movieId);
        return response;
    } catch (error) {
        console.log("Error in the service layer", error);
        throw error;
    }
};

const deleteMovie = async (movieId) =>{
    try {
        const response = await MovieRepository.delete(movieId);
        return response;
    } catch (error) {
        console.log("Error in the service layer",error);
        throw error;
    }
};

const updateMovie = async (movieId, data) => {
  try {
    const response = await MovieRepository.update(movieId, data);
    return response;
  } catch (error) {
    console.log('Error in movie service layer', error);
    throw error;
  }
};



module.exports = {
    createMovie,
    getMovie,
    deleteMovie,
    updateMovie
};