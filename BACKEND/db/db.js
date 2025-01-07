const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log("Connected to Db"))
        .catch(err => console.log("Database connection error:", err));
}

module.exports = connectToDb;
