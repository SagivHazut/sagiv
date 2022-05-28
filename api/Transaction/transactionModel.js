const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
});

const Transaction = mongoose.model("transaction", transactionSchema);
exports.Transaction = Transaction;
