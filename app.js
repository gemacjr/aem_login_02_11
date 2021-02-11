const express = require('express')
const app = express()
const port = 3000;
var path = __dirname + '/public/';
const router = express.Router();


router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});



app.use(express.static(__dirname + '/'));

router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})