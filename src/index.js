express = require('express');

bodyParser = require('body-parser');
apiRoutes = require('./routes/index.js');
const {PORT} = require('./config/serverConfig');

const app = express();

const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started on Port: ${PORT}`);
    });
}

setupAndStartServer();