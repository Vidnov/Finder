var express = require("express");
var router = express.Router();
var sql = require("../routes/config");
/* GET home page. */
router.get("/", function (req, res, next) {
  
 var barcode ="234565708351"
  sql
    .query("SELECT * from dbo.Goods WHERE BarCode1 = '6941059643630'")
    .then((data) =>{ res.send(data)})
    .catch((error) => console.error(error));
});

router.post("/", function (req, res, next) {
 
  console.log(req.body)
  const {Search}=req.body
  
  var Find = Number(Search)
  console.log(typeof Search)
  console.log(typeof Find)
  var barcode ="2000002785675"
  console.log(typeof barcode )
   sql
     .query(`SELECT * from dbo.Goods WHERE BarCode1 =@P1`,Search)
     .then((data) =>{ 
      console.log(data) 
      res.send(data)})
     .catch((error) => console.error(error));
 });
module.exports = router;

