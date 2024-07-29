const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://user1:User1FinBuddy@finbuddy.wlh9wdw.mongodb.net/?retryWrites=true&w=majority&appName=FinBuddy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Test Route
app.get('/', (req, res) => res.send('API Running'));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
