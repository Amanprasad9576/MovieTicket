const express = require('express');
const { serverConfig } = require('./src/config');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Project Starts");
});

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
});

