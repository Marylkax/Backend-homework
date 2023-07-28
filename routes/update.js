const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mySQL/connection");

router.patch("/character/:id/", async (req, res) => {
  console.log({ update: req.body, id: req.params.id });

  const id = Number(req.params.id);

  const { char_name, species, gender, origin } = req.body;

  try {
    if (char_name && typeof char_name === "string") {
      await asyncMySQL(
        `UPDATE characters SET char_name = "${char_name}" WHERE id LIKE "${id}";`
      );
    }
    if (origin && typeof origin === "string") {
      await asyncMySQL(
        `UPDATE characters SET origin = "${origin}" WHERE id LIKE "${origin}";`
      );
    }
    if (species && typeof species === "string") {
      await asyncMySQL(
        `UPDATE characters SET species = "${species}" WHERE id LIKE "${species}";`
      );
    }
    if (gender && typeof gender === "string") {
      await asyncMySQL(
        `UPDATE characters SET gender = "${gender}" WHERE id LIKE "${gender}";`
      );
    }
  } catch (error) {
    res.send({ status: 0, reason: error.sqlMessage });
  }
  res.send({ status: 1, message: "Character has been updated" });
});

module.exports = router;
