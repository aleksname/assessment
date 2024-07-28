// const { MongoClient } = require('mongodb');

// const URL = 'mongodb://localhost:27017/starsBox';

// let dbConnection;

// module.exports = {
//     connectToDb: (cd) => { 
//         MongoClient
//             .connect(URL)
//             .then((client) => {
//                 console.log('Connected to MongoDb');
//                 dbConnection = client.db();
//                 return cd();
//             })
//             .catch((err) => {
//                 return cb(err);
//             })
//     },
//     getDb: () => dbConnection,
// }