const express = require('express');
const { mongoose } = require('mongoose');

const { serverConfig } = require('./config/index.js');
const apiRouter = require('./routers/apiRouter.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRouter);

app.get('/', (req, res) => {
    res.send("Project Starts");
});

app.listen(serverConfig.PORT, async() => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
    try {
        await mongoose.connect(serverConfig.DEV_DB_URL);
        console.log("Connected to the database");
    } catch (err) {
        console.error("Database connection error:", err);
    }
});





