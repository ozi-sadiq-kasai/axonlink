const mongoose = require('mongoose');
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, {
  serverSelectionTimeoutMS: 30000, // Increase timeout if needed
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));
