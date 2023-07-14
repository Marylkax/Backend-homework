//add verb is post
// could add mupltiple characters at once

const express = require("express");
const router = express.Router();

router.post("/character", (req, res) => {
  console.log(req.body);
  const { name, species, gender, origin } = req.body;

  //check the contents
  if (
    !name ||
    !species ||
    !gender ||
    !origin ||
    typeof name !== "string" ||
    typeof species !== "string" ||
    typeof gender !== "string" ||
    typeof origin !== "string" //in API is usually an object, can I check location and url are added, some have empty strings in API
  ) {
    res.send({ status: 0, reason: "Incomplete or invalid request" });
    return;
  }
  const indexOf = req.rickandmorty.findIndex((item) => {
    return item.name === name;
    // all other identifiers can be duplicated, so only checking for name
  });

  // -1 would be not in the array, so would then be possible to add to array
  if (indexOf > -1) {
    res.send({ status: 0, reason: "Duplicate entry" });
    return;
  }

  req.rickandmorty.push({
    id: req.rickandmorty.length + 1, // does this have somerisk, or okay to sequentially number. When deleting numbering goes off, but IDs were numbered to begin with
    name,
    species,
    gender,
    origin,
    //using a spread operator here would cause problems
  });
  res.send({ status: 1, message: "Character added" });

  console.log(req.rickandmorty.length);
  //   //check for duplicates
  //   const indexOf = req.simpsons.findIndex((item) => {
  //     return item.character === character || item.quote === quote;
  //   });
});

module.exports = router;
