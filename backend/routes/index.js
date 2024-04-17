var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var url = "mongodb://127.0.0.1:27017/wathare_infotech_solution";
mongoose.connect(url, {});
const machindata = mongoose.model("machine_datas", {
  ts: { type: Date },
  machine_status: { type: Number },
  vibration: { type: Number },
});

/* GET home page. */
router.get("/", async function (req, res, next) {
  let data;
  if(req.params.startTime && req.params.endTime ) {
    data = await machindata.find({ts:{$gte:req.params.startTime, $lt:req.params.endTime}});
  } else{
    data = await machindata.find({});
  }
 
  res.send({ data: data });
});

module.exports = router;
