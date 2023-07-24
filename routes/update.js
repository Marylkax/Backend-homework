const express = require("express");
const router = express.Router();

//modifying data
router.patch("/character/:id/", (req, res) => {
  console.log({ update: req.body, id: req.params.id });

  const id = Number(req.params.id);

  const indexOf = req.rickandmorty.findIndex((item) => {
    return item.id === id;
  });

  if (indexOf < 0) {
    res.send({ status: 0, reason: "ID not found" });
    return;
  }
  const { name, species, gender, origin } = req.body;
  console.log(indexOf);

  //Only updates one of the ones we send, but also doesnt allow input of data outside of name/ origin/ species/ gender. This is secure
  // These values can be anything, there not a limitation, if there was would make a const of an array and check for those values
  if (name && typeof name === "string") {
    req.rickandmorty[indexOf].name = name;
  }
  if (origin && typeof origin === "string") {
    req.rickandmorty[indexOf].origin = origin;
  }
  if (species && typeof species === "string") {
    req.rickandmorty[indexOf].species = species;
  }
  if (gender && typeof gender === "string") {
    req.rickandmorty[indexOf].gender = gender;
  }
  // Should this give a warning if only some parts update, eg. send a number and that doesnt go in, but other updates are valid
  // else block for res.send would be answer. Would this work though if one item is wrong, tried and had error [ERR_HTTP_HEADERS_SENT]
  res.send({ status: 1, message: "Character has been updated" });
});

module.exports = router;
