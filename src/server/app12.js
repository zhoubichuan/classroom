let express = require('express');
let app = express();
app.listen(3000);
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIOINS');
    res.header('Access-Control-Allow-Header', 'Accept,Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');//允许客户端跨域发cookie
    if (req.method == 'options') {
        res.end('');
    } else {
        next();
    }
});
let sliders = require('./mock/sliders');
app.get('/api/sliders', function (req, res) {
    res.json(sliders);
});
let lessons = require('./mock/lessons');
// '/api/lessons/react?offset=0&limit=5
app.get('/api/lessons/:category', function (req, res) {
    let data = JSON.parse(JSON.stringify(lessons));
    let category = req.params.category;//取得分类名称
    let offset = req.query.offset;
    let limit = req.query.limit;
    offset = isNaN(offset) ? 0 : parseInt(offset);
    limit = isNaN(limit) ? 5 : parseInt(limit);
    //先拿条件过滤一下
    if (category != 'all') {
        data = data.filter(item => item.category == category);
    }
    //pageSize  pageNumber
    // 10 第一页  0 5 第二页 5 10
    let list = data.slice(offset, offset + limit);//包前不包后 本页的条数
    let hasMore = data.length > offset + limit;  //是否还有更多
    setTimeout(function () {
        res.json({ list, hasMore });
    }, 1000);
});