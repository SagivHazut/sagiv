const { Card } = require("./cardModel");
const express = require("express");
const auth = require("../middlewares/authorization");
const router = express.Router();
const chalk = require("chalk");
// const res = require("express/lib/response");
const { validateCard } = require("./cardValidation");
const { generateBizNum } = require("./services/generateBizNum");

/********** סעיף 7 **********/
router.get("/allCards", async (req, res) => {
  try {
    const cards = await Card.find();
    console.log(cards);
    return res.send(cards);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

/********** סעיף 8 **********/
/********** params **********/
router.get("/card/:id", async (req, res) => {
  try {
    const cardID = req.params.id;
    const card = await Card.findOne({ _id: cardID });
    //const _id = req.params.id;
    //const card = await Card.findOne({ _id });
    return res.send(card);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

router.get("/card", async (req, res) => {
  try {
    const cardID = req.query.id;
    const card = await Card.findOne({ _id: cardID });
    //const _id = req.params.id;
    //const card = await Card.findOne({ _id });
    return res.send(card);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

/********** סעיף 10 **********/
router.post("/", auth, async (req, res) => {
  try {
    let card = req.body;
    const { error } = validateCard(card);
    if (error) {
      console.log(chalk.redBright(error.details[0].message));
      return res.status(400).send(error.details[0].message);
    }
    const bizNumber = await generateBizNum();

    card = {
      title: card.title,
      description: card.description,
      price: card.price,
      image: card.image
        ? card.image
        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      bizNumber,
    };

    card = new Card(card);
    await card.save();
    return res.send(card);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});
/********** edit card **********/
router.put("/:id", auth, async (req, res) => {
  try {
    let card = req.body;
    const { error } = validateCard(card);
    if (error) {
      const errorMessage = error.details[0].message;
      console.log(errorMessage);
      return res.status(400).send(errorMessage);
    }

    card = await Card.findOneAndUpdate(card);
    if (!card) {
      console.log(chalk.redBright("No card with this ID in the database!"));
      return res.status(404).send("No card with this ID in the database!");
    }
    card = await Card.findById(card._id);
    return res.send(card);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

/********** delete card **********/
router.delete("/:id", auth, async (req, res) => {
  try {
    const cardID = req.params.id;
    let card = await Card.findById(cardID);

    card = await Card.findOneAndRemove({ _id: cardID });
    return res.send(card);
  } catch (error) {
    console.log(chalk.redBright("Could not delete card:", error.message));
    return res.status(500).send(error.message);
  }
});

//////////////
router.patch("/soldCount/:id", auth, async (req, res) => {
  let card = req.body.soldCount;
  const filter = {
    _id: req.params.id,
  };
  card = {
    soldCount: card + 1,
  };

  const { error } = validateCard(card);
  if (error) {
    const errorMessage = error.details[0].message;
    console.log(errorMessage);
    return res.status(400).send(errorMessage);
  }

  card = await Card.findOneAndUpdate(filter, card);
  if (!card) {
    console.log(chalk.redBright("No card with this ID in the database!"));
    return res.status(404).send("No card with this ID in the database!");
  }
  card = await Card.findById(card._id);
  return res.send(card);
});

router.patch("/:id", auth, async (req, res) => {
  try {
    let card = req.body;

    const filter = {
      _id: req.params.id,
    };
    const { error } = validateCard(card);
    if (error) {
      const errorMessage = error.details[0].message;
      console.log(errorMessage);
      return res.status(400).send(errorMessage);
    }

    card = await Card.findOneAndUpdate(filter, card);
    if (!card) {
      console.log(chalk.redBright("No card with this ID in the database!"));
      return res.status(404).send("No card with this ID in the database!");
    }
    card = await Card.findById(card._id);
    return res.send(card);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

router.patch("/uniqueSoldCount/:id", auth, async (req, res) => {
  try {
    let card = req.body.uniqueSoldCount;
    card = {
      uniqueSoldCount: card,
    };
    const filter = {
      _id: req.params.id,
    };

    const { error } = validateCard(card);
    if (error) {
      const errorMessage = error.details[0].message;
      console.log(errorMessage);
      return res.status(400).send(errorMessage);
    }

    card = await Card.findOneAndUpdate(filter, card);
    if (!card) {
      console.log(chalk.redBright("No card with this ID in the database!"));
      return res.status(404).send("No card with this ID in the database!");
    }
    card = await Card.findById(card._id);
    return res.send(card);
  } catch (error) {
    console.log(chalk.redBright(error.message));
    return res.status(500).send(error.message);
  }
});

module.exports = router;
