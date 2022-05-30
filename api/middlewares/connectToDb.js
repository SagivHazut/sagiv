const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect(
    "mongodb://localhost/api",
    // "mongodb://host.docker.internal:27017/task-management",
    // {
    //   auth: {
    //     username: "sagiv",
    //     password: "123456",
    //   },
    //   authSource: "admin",
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // },
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(chalk.magentaBright.bold("connected to MongoDb!")))
  .catch((error) =>
    console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`))
  );
