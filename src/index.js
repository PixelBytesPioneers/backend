const express = require('express');

const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index.js');
const {PORT} = require('./config/serverConfig');
const connect = require('./config/database.js');

const app = express();

const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on Port: ${PORT}`);
        await connect();
        console.log("CONNECTED TO MONGO DB.");
    });
}

setupAndStartServer();