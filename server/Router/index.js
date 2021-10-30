const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.send({
    project: {
      projectName: "traveler",
      version: "1.0.0",
    },
  });
});

module.exports = router;
