const express = require('express');
const { serverConfig } = require('./src/config');
const { mongoose } = require('mongoose');
const  { Movie } = require('./src/models')
const apiRouter = require('./src/routers/apiRouter.js');

const app = express();

app.use(express.json());

app.use('/api',apiRouter);

app.get('/', (req, res) => {
    res.send("Project Starts");
});

app.listen(serverConfig.PORT, async() => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
    try {
        await mongoose.connect(serverConfig.DEV_DB_URL);
        console.log("Connected to the database");
        const movie = await Movie.create({
            name:"Inception",
            description:"A mind-bending thriller",
            casts:["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
            director:"Christopher Nolan",
            duration:148,
            trailerUrl:"http://example.com/trailer",
            language:["English"],
            releaseDate:new Date("2010-07-16"),
            releaseStatus:"Ended"
        });
        console.log("Sample movie created:", movie);
    } catch (err) {
        console.error("Database connection error:", err);
    }
});



/*
https://localhost/api/v1/movie 
 api --> v1 --> movie 

*/

