const express = require('express');
const { serverConfig } = require('./src/config');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(express.json());

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



