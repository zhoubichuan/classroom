let express = require("express");
let app = express();
app.listen(3000, function() {
  console.log("已经成功连接3000端口");
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Header", "Accept,Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method == "options") {
    res.end();
  } else {
    next();
  }
  let sliders = require("./mock/sliders");
  app.get("/api/sliders", function(req, res) {
    console.log(res);
    res.json(sliders);
  });
});
