const mongoose = require('mongoose');
const config = require('./index');

mongoose.connect(
  `mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`,
  {
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log("Error in db connection", err);
    } else {
      console.log('MongoDB connected!');
    }
  }
);