const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mySQL/connection");

router.post("/character", async (req, res) => {
  const { char_name, species, gender, origin } = req.body;

  //check the contents
  if (
    !char_name ||
    !species ||
    !gender ||
    !origin ||
    typeof char_name !== "string" ||
    typeof species !== "string" ||
    typeof gender !== "string" ||
    typeof origin !== "string"
  ) {
    res.send({ status: 0, reason: "Incomplete or invalid request" });
    return;
  }
  try {
    await asyncMySQL(
      `INSERT INTO charcters (char_name,species, origin, gender) VALUES ("${char_name}","${species}", "${gender}","${origin}") ;`
    );
    res.send({ status: 1 });
  } catch (error) {
    res.send({ status: 0, reason: "Duplicate entry" });
  }
});

module.exports = router;
