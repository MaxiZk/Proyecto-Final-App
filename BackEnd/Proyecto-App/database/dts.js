const mongoose = require('mongoose');

// Configura la opción strictQuery
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://maxizuidwijk27:<Junior2003>@cluster0.gmonyao.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => {
  console.log('Conexión exitosa!');
})
.catch((err) => {
  console.error(err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

export default db;