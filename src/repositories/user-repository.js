const { User } = require('../models');

const createUser = async (userData) =>{
    try {
        const response = await User.create(userData);
        return response;
    } catch (error) {
        console.log("Error in creating the user repository", error);
        throw error;
    }
}

module.exports = {
    createUser,
}
