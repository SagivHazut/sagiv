require("./middlewares/connectToDb");
const express = require("express");
const app = express();
const cardsRouter = require("./Cards/cardsRouter");
const transactionRouter = require("./Transaction/transactionRouter");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan(chalk.cyan(":method :url :status :response-time ms")));
app.use(cors());
app.use(express.json());
app.use("/api/cards", cardsRouter);
app.use("/api/transaction", transactionRouter);

const PORT = process.env.PORT || 8181;
app.listen(PORT, () =>
  console.log(chalk.blueBright.bold(`server run on: http://:localhost:${PORT}`))
);
