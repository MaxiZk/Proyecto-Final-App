const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const app = express();
app.use(express.json());

const routes = require('./Routes/routes.js');
app.use('/api', routes);

// Connect to MongoDB
process.env.NODE_NO_DEPRECATION = 1;

const mongoURI = 'mongodb+srv://maxizuidwijk27:Junior2003@cluster0.gmonyao.mongodb.net/your_database';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define the Finance schema
const FinanceSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  type: String,
});

const Finance = mongoose.model('Finance', FinanceSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Finance App API!');
});

app.get('/finances', async (req, res) => {
  const finances = await Finance.find();
  res.json(finances);
});

app.post('/finances', async (req, res) => {
  const finance = new Finance(req.body);
  await finance.save();
  res.json(finance);
});

app.put('/finances/:id', async (req, res) => {
  const finance = await Finance.findByIdAndUpdate(req.params.id, req.body);
  res.json(finance);
});

app.delete('/finances/:id', async (req, res) => {
  await Finance.findByIdAndDelete(req.params.id);
  res.json({ message: 'Finance deleted successfully' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});