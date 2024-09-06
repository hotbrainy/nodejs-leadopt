const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
dotenv.config();
const connectDatabase = require("./config/db");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", routes);

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
