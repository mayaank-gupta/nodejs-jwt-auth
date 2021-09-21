require('dotenv').config();
const config = {
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET
}


module.exports = config;