const express = require("express");
const router = express.Router();
const Texts=require('../models/Texts')

//Route 1: Adding texts: POST "/api/texts/addtexts".
router.post('/addtexts',(req,res)=>{
    const Texts_table = Texts(req.body);
    Texts_table.save();
    res.send(req.body);
})
//Route 2: Fetch texts: get "/api/texts/fetchalltext".
router.get("/fetchalltext", async (req, res) => {
    const texts = await Texts.find();
    res.json(texts);
});
//Route 3: Fetch texts: get "/api/texts/fetchtext".
router.get("/fetchtext", async (req, res) => {
    const texts = await Texts.find({ Title: req.query.Title });
    res.json(texts);
});
router.get("/fetchalltitle", async (req, res) => {
    const texts = await Texts.find();
    const titles = texts.map(item => item.Title);
    res.json(titles);
});

module.exports=router;