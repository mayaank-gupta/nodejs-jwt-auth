const express = require("express");
const app = express();
const connectDB = require("./config/db");
const config = require("./config");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const PORT = config.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});