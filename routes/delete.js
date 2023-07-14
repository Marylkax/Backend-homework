const express = require("express");
const router = express.Router();

router.delete("/character/:id", (req, res) => {
  console.log(req.params.id);

  const id = Number(req.params.id);

  //check that id is a number
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  const indexOf = req.rickandmorty.findIndex((item) => {
    return item.id === id;
  });

  //-1 out of array, doesn't exist
  if (indexOf < 0) {
    res.send({ status: 0, reason: "ID not found" });
  }

  req.rickandmorty.splice(indexOf, 1);

  res.send({ status: 1 });
});

module.exports = router;
