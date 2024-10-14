const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authroutes');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log('MongoDB connected');
  const PORT = process.env.PORT ||6000;
  app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
  });
})

.catch(err => {
  console.error('MongoDB connection error:', err);
});
app.use('/api/auth',authRoutes);
app.cors();