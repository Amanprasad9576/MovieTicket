const { Movie } = require('../models');

const createMovieRepository = async (movieData) => {
    try {
        const response = await Movie.create(movieData);
        return response;
    } catch (error) {
        console.log("Error in movie repository layer", error);
        throw error;
    }
};

const getMovieById = async(movieId)=>{
    try {
        const response = await Movie.findById(movieId);
        return response;
    } catch (error) {
        console.log("Error in getting movie respository",error);
        throw error;
    }
}


const deleteMovieById = async (movieId)=>{
    try {
        const response = await Movie.findByIdAndDelete(movieId);
        return response;
    } catch (error) {
        console.log("Error in deleting movie repository",error);
        throw error;
    }
}


const updateMovie = async (movieId, data)=>{
     try {
        const response = await Movie.findByIdAndUpdate(movieId, data, { new: true });
        return response;
    } catch (error) {
        console.log("Error in updating movie repository", error);
        throw error;
    }
}

     

module.exports = {
    createMovieRepository,
    getMovieById,
    deleteMovieById,
    updateMovie
};

