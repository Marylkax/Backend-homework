const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mySQL/connection");

router.get("/characters", async (req, res) => {
  const results = await asyncMySQL(
    `SELECT id, char_name, species, origin, gender FROM characters ;`
  );

  res.send({ status: 1, results });
});

router.get("/character/:id", async (req, res) => {
  const id = Number(req.params.id);
  const results = await asyncMySQL(
    `SELECT id, char_name, species, origin, gender FROM characters WHERE id LIKE ${id};`
  );
  if (results.length > 0) {
    res.send({ status: 1, results });
  }
  res.send({ status: 0, reason: ` id not found` });
  console.log(results);
});
module.exports = router;
