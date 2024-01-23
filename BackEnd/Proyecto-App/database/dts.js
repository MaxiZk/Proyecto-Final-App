import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


/* const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD; */
const URL = process.env.URL;

// Configura la opción strictQuery
mongoose.set('strictQuery', false);

const db = mongoose.connect(URL, {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Conexión exitosa!');
  })
  .catch((err) => {
    console.error(err);
  });

export default db;
