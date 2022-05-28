const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1004,
  },
  price: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 14,
  },
  image: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 1024,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  bizNumber: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 7,
    unique: true,
  },
  soldCount: {
    type: Number,
    default: 0,
  },
});

const Card = mongoose.model("Card", cardSchema);
exports.Card = Card;
