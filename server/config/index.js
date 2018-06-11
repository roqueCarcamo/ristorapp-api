require('dotenv').config()

const config = { 
    hostname: 'localhost',
    port: 3000,
    db: {
        url: 'mongodb://adminRistorapp:ristorapp123@ds153700.mlab.com:53700/ristorapp'
    },
    cors: {
        origin: 'https://ristorapp.herokuapp.com/' || '*',
        credentials: true
    },
    jwt: {
        secret: 'rcarme'
    }
};

module.exports = config;