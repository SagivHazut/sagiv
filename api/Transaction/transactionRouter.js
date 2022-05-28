const { Transaction } = require("./transactionModel");
const express = require("express");
const auth = require("../middlewares/authorization");
const router = express.Router();
const chalk = require("chalk");
const { validateTransaction } = require("./validateTransaction");

/********** סעיף 7 **********/
router.get("/Transaction", async (req, res) => {
  try {
    const transaction = await Transaction.find();
    console.log(transaction);
    return res.send(transaction);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    let transaction = req.body;
    const { error } = validateTransaction(transaction);
    if (error) {
      console.log(chalk.redBright(error.details[0].message));
      return res.status(400).send(error.details[0].message);
    }

    transaction = new Transaction(transaction);
    await transaction.save();
    return res.send(transaction);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

// router.delete("/:id", auth, async (req, res) => {
//   try {
//     const cardID = req.params.id;
//     let card = await Card.findById(cardID);

//     card = await Card.findOneAndRemove({ _id: cardID });
//     return res.send(card);
//   } catch (error) {
//     console.log(chalk.redBright("Could not delete card:", error.message));
//     return res.status(500).send(error.message);
//   }
// });

router.patch("/transaction", auth, async (req, res) => {
  try {
    let transaction = req.body;
    const { error } = validateTransaction(transaction);
    if (error) {
      const errorMessage = error.details[0].message;
      console.log(errorMessage);
      return res.status(400).send(errorMessage);
    }

    transaction = await Card.findOneAndUpdate(transaction);
    if (!transaction) {
      console.log(chalk.redBright("No card with this ID in the database!"));
      return res.status(404).send("No card with this ID in the database!");
    }
    transaction = await Transaction.findById(transaction._id);
    return res.send(transaction);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

module.exports = router;
