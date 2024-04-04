const express = require("express");
const { generateImage, generateText } = require("../controller/openAi.controller");

const router = express.Router();

router.post("/textGenerator",generateText);
router.get("/imageGenerator", generateImage);

module.exports = router;
