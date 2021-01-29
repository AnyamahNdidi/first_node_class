const http = require('http');

const port = 3000

const app = http.createServer(function(req, res){
    console.log(req)
    res.end();
});

app.listen(port, function(){
    console.log(`this is the last time im trying this ${port}`);

});