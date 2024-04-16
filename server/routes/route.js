const express = require("express")
const router = express.Router()
const Data = require("../model/model")

router.get("/",async (req, res) => {
    try {
      const data = await Data.find();
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })



module.exports = router;
