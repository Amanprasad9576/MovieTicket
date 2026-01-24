const { User } = require('../models');
const crudRepository = require('./crud-repository');

const userRepository = {
    ...crudRepository(User),

    getByEmail: async function (email){
      const user = await User.findOne({email});
      return user;
    },
    
    getByUsername: async function (username) {
      const user = await User.findOne({ username }).select('-password'); // exclude password
      return user;
    }
  };


module.exports = userRepository;