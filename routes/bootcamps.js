const express = require("express");
const router = express.Router();

router.get("/api/v1/bootcamp", (req, res) => {
  res.status(200).json({ sucess: true, msg: "Show all bootcamps" });
});

router.get("/api/v1/bootcamp/:id", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Show bootcamp by id :${req.params.id}` });
});

router.post("/api/v1/bootcamp", (req, res) => {
  res.status(200).json({ sucess: true, msg: "Create new bootcamp" });
});

router.put("/api/v1/bootcamp/:id", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `update bootcamp by id:${req.params.id}` });
});

router.delete("/api/v1/bootcamp/:id", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp by id:${req.params.id}` });
});

module.exports = router;
