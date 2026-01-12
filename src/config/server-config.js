const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DEV_DB_URL: process.env.DEV_DB_URL
};
