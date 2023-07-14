const express = require("express");
const router = express.Router();

router.get("/characters", (req, res) => {
  //   if (!characters) {
  //     res.send({ status: 0, reason: "ID not found" });
  //   }
  // was trying to check chanracters spelt correctly? is there a way for this
  res.send({ status: 1, characters: req.rickandmorty });
});

router.get("/character/:id", (req, res) => {
  //defensive check for id valid number
  if (!Number(req.params.id)) {
    res.send({ status: 0, reason: "Invalid ID, please enter a number" });
    return;
  }

  //copy and find a character
  const _rickandmorty = [...req.rickandmorty];
  const character = _rickandmorty.find((char) => {
    return char.id === Number(req.params.id);
  });

  //if no id match, return message to user
  if (!character) {
    res.send({ status: 0, reason: "ID not found" });
  }

  res.send({ status: 1, character });
});

module.exports = router;
