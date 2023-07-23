const express = require("express");
const router = express.Router();
const Scores = require("../models/Scores");

//Route 1: Get all the scores of a user: GET "/api/scores/fetchallscores".
router.get("/fetchallscores", async (req, res) => {
    const scores = await Scores.find();
    res.json(scores);
});

//Route 2: Adding scores of a user: POST "/api/scores/addscores".
router.post(
    "/addscores",
    async (req, res) => {
      //if there are error return bad request and the errors
      try {
        const {User,Title,wordmin,error,words,Date} = req.body;
        const score = new Scores({
          User,Title,wordmin,error,words,Date
        })
        const savedscore = await score.save();
        res.json(savedscore);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );
module.exports = router;
