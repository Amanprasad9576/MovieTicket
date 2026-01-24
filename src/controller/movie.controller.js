const MovieService = require('../services/movie.service');
const StatusCodes = require('http-status-codes');

console.log("Movie Service:", MovieService);
const createMovie = async(req,res)=>{
    try {
       const movie = await MovieService.createMovie(req.body);
       res.status(StatusCodes.CREATED).json({
           success:true,
           message:"Movie created",
           data:movie
       });
    } catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error in creating movie",
            error:err.message,
        })
    }  
};

const getMovie = async (req,res)=>{
    try {
        const response = await MovieService.getMovie(req.params.id);
        if(!response){
            return res.status(404).json({
                success:false,
                message:"Movie not found",
            })      
        }
        res.status(200).json({
            success:true,
            message:"Movie fetched successfully",
            data:response
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error in fetching the movie",
            error:err.message
        })
    }
}


const deleteMovie = async (req,res)=>{
    try {
        const response = await MovieService.deleteMovie(req.params.id);
        if(!response){
            return res.status(404).json({
                success:false,
                message:"Movie not found",
            })
        }
        res.status(200).json({
            success:true,
            message:"message delete successfully",
            data:response,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error in delete the movie",
            error:error.message
        })
    }
}


const updateMovie = async (req,res)=>{
    try {
        const data =req.body;
        const response = await MovieService.updateMovie(req.params.id,data);
        if(!response){
            res.status(404).json({
                success:false,
                message:"Movie not available"
            })
        };
        res.status(200).json({
            success:true,
            message:"Movie update successfully",
            data:response,
        }) 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error in update the movie",
            error:error.message
        })
    }
};



module.exports = {
    createMovie,
    getMovie,
    deleteMovie,
    updateMovie,
}


/* 
create movie
delete movie 
search movie 
update movie 


for the update movie approach to solve it 
first - find the movie if present 
if present then update it 

if not then return the message that movie not found

*/