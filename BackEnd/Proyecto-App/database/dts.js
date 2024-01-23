const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.URL;

// Configura la opción strictQuery
mongoose.set('strictQuery', true);

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión exitosa!');
})
.catch((err) => {
  console.error(err);
});


module.exports = mongoose.connection;