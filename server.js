const app = require("./app");
const mongoost = require("mongoose");


const DB_HOST =
  "mongodb+srv://Nata1:z5YGGcYQGBUQy5sN@cluster0.uzzgdvj.mongodb.net/contacts-db?retryWrites=true&w=majority";
// const { DB_HOST } = require("./config");

// const { DB_HOST, PORT } = process.env;

mongoost
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
