const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Ping route (already defined in the provided code)
// router.get('/ping', (req, res) => {
//   res.json({ message: 'pong' });
// });

module.exports = router;
