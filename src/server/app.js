let express = require("express");
let bodyParser = require("body-parser");
let session = require("express-session");
let app = express();
//解析form格式的请求体
app.use(bodyParser.urlencoded({ extended: true }));
//解析json格式的请求
app.use(bodyParser.json());
app.use(
  session({
    secret: "zfpx",
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 1000
    },
    saveUninitialized: true
  })
);
app.listen(3000);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIOINS");
  res.header("Access-Control-Allow-Headers", "Accept,Content-Type");
  //允许客户端跨域发cookie
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method == "options") {
    res.end("");
  } else {
    next();
  }
});
let sliders = require("./mock/sliders");
app.get("/api/sliders", function(req, res) {
  res.json(sliders);
});
let lessons = require("./mock/lessons");
app.get("/api/lessons/:category", function(req, res) {
  let data = JSON.parse(JSON.stringify(lessons));
  let category = req.params.category;
  let offset = req.query.offset;
  let limit = req.query.limit;
  offset = isNaN(offset) ? 0 : parseInt(offset);
  limit = isNaN(limit) ? 5 : parseInt(limit);
  //先拿条件过滤一下
  if (category != "all") {
    data = data.filter(item => item.category == category);
  }
  let list = data.slice(offset, offset + limit);
  let hasMore = data.length > offset + limit;
  setTimeout(function() {
    res.json({ code: 0, data: { list, hasMore } });
  }, 1000);
});
let users = [];
app.post("/api/reg", (req, res) => {
  let body = req.body;
  body.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push(body);
  res.json({
    code: 0,
    success: "注册成功"
  });
});
//登录功能
app.post("/api/login", (req, res) => {
  let user = req.body;
  let oldUser = users.find(
    item => item.username == user.username && item.password == user.password
  );
  if (oldUser) {
    req.session.user = oldUser;
    res.json({
      code: 0,
      success: "登录成功",
      user: oldUser
    });
  } else {
    res.json({
      code: 1,
      error: "用户名或者密码错误"
    });
  }
});
app.get("/api/logout", (req, res) => {
  req.session.user = null;
  res.json({
    code: 0,
    success: "退出成功"
  });
});
app.get("/api/validate", (req, res) => {
  let user = req.session.user;
  if (user) {
    res.json({
      code: 0,
      user,
      succeess: "自动登录成功"
    });
  } else {
    res.json({
      code: 1,
      error: "此用户未登陆"
    });
  }
});
