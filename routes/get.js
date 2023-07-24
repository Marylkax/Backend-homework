const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mySQL/connection");

// router.get("/characters", (req, res) => {
//   res.send({ status: 1, characters: req.rickandmorty });
// });

router.get("/character/:id", async (req, res) => {
  const results = asyncMySQL(
    `SELECT name, species, origin, gender FROM rickandmorty WHERE id LIKE ${id};`
  );
});

module.exports = router;
