const app = require("./app");
const mongoost = require("mongoose");

const DB_HOST =
  "mongodb+srv://Nata1:z5YGGcYQGBUQy5sN@cluster0.uzzgdvj.mongodb.net/contacts-db";

mongoost
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
