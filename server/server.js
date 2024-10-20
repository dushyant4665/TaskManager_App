const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const verifyCaptcha = require('./config/captcha'); 
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes); 
app.use('/api/tasks', taskRoutes); 


app.post('/api/auth/register', verifyCaptcha, authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');
// const taskRoutes = require('./routes/taskRoutes');
// const verifyCaptcha = require('./config/captcha'); 
// const dotenv = require('dotenv');

// dotenv.config();
// const app = express();
// app.use(bodyParser.json());

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));


// app.use('/api/auth', authRoutes);


// app.use('/api/tasks', taskRoutes);


// app.post('/api/register', verifyCaptcha, (req, res) => {
 
//   res.status(200).json({ message: 'Registration successful!' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
