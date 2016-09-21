var express = require('express');
var jade = require('jade');



// 静态资源请求路径
var path = require('path');


var app = express();
var port = process.env.PORT || 3000;


app.set('views', './views/pages');
app.set('view engine', 'jade');
// 静态资源请求路径
app.use(express.static(path.join(__dirname, 'bower_components')));


var emptyMovie = {
    title: "",
    doctor: "",
    country: "",
    language: "",
    year: "",
    poster: "",
    summary: ""
};
var movies1 = {
    title: "碟中谍5",
    doctor: "abc",
    country: "美国",
    language: "英语",
    year: "2015",
    id:"01",
};
// 路由
// 用户界面
app.get('/', function (req, res) {
        res.render('index', {title:'电影-首页', movies: movies1});
});
app.get('/list', function (req, res) {
        res.render('list', {title:'电影-列表', movies: movies1});
});
app.get('/detail/:id', function (req, res) {
    var id = req.params.id;

        res.render('detail', {title: '电影-详情', movie: movie});

});

// 管理员界面
app.get('/admin/movie', function (req, res) {
    res.render('admin', {title: '电影-后台录入页', movie: emptyMovie});
});

// 监听端口
app.listen(port);
console.log('server started on port: ' + port);