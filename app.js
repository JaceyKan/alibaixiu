const express = require(express);

const app = express();

app.use('/', (req, res) => {
    res.send('欢迎访问网站首页');
})

app.listen(8080);
console.log('服务器创建成功，请访问http://localhost:8080');