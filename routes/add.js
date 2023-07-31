const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mySQL/connection");

router.post("/character", async (req, res) => {
  const { char_name, species, gender, origin } = req.body;

  if (
    !char_name ||
    !species ||
    !gender ||
    !origin ||
    typeof char_name !== "string" ||
    typeof species !== "string" ||
    typeof gender !== "string"
  ) {
    res.send({ status: 0, reason: "Incomplete or invalid request" });
    return;
  }

  try {
    await asyncMySQL(
      `INSERT INTO characters (char_name,species,  gender) VALUES ("${char_name}","${species}", "${gender}") ;`
    );
    res.send({ status: 1 });
  } catch (error) {
    res.send({ status: 0, reason: "Duplicate entry" });
  }
});

module.exports = router;
