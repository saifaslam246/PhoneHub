require("dotenv").config({ path: "backend/config/config.env" });
const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`connectiong to database ${con.connection.host}`);
    });
};
module.exports = connectDatabase;
