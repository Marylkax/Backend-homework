const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mySQL/connection");

// router.get("/characters", (req, res) => {
//   //   if (!characters) {
//   //     res.send({ status: 0, reason: "ID not found" });
//   //   }
//   // was trying to check chanracters spelt correctly? is there a way for this
//   res.send({ status: 1, characters: req.rickandmorty });
// });

router.get("/character/:id", async (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const results = await asyncMySQL(
    `SELECT name, species, origin, gender FROM characters WHERE id LIKE ${req.params.id};`
  );

  console.log(results);
});
module.exports = router;
