const mongoose = require('mongoose');
const { MONGO_URL } = require('./serverConfig')

const connect = async () => {
    await mongoose.connect(MONGO_URL);
    // await mongoose.connect("mongodb://localhost:27017/pixel_backend_dev");
}

module.exports = connect;