const { MovieRepository } = require('../repositories');

const createMovie = async (movieData) => {
    try {
        const movie = await MovieRepository.createMovieRepository(movieData);
        return movie;
    } catch (error) {
        console.log('Error in movie service layer', error);
        throw error;
    }
};

const getMovie = async (movieId) => {
    try {
        const response = await MovieRepository.getMovieById(movieId);
        return response;
    } catch (error) {
        console.log("Error in the service layer", error);
        throw error;
    }
};

const deleteMovie = async (movieId) =>{
    try {
        const response = await MovieRepository.deleteMovieById(movieId);
        return response;
    } catch (error) {
        console.log("Error in the service layer",error);
        throw error;
    }
};


module.exports = {
    createMovie,
    getMovie,
    deleteMovie
};