const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');
dotenv.config();

const app = express();
app.use(express.json());

const deductRoutes = require('./routes/deduct.routes');
app.use('/api/deduct', deductRoutes);
app.use('/', routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});