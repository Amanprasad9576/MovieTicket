const { UserRepository } = require("../repositories");

const createUser = async (userData)=>{
    try {
        const response = await UserRepository.createUser(userData);
        return response;
    } catch (error) {
        console.log("Error in user service layer",error);
        throw error;
    }
}

module.exports = {
    createUser
}