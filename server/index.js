import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
let fs = require('fs');
const http = require('http');
let bodyParser = require('body-parser');
var request = require('request');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const compiler = webpack(webpackConfig);
var CONFIG = require('./config.json');



app.use(webpackMiddleware(compiler, {
	hot:true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'./index.html'));
});

 // --------- Client Controllers --------------------------------------//


app.post('/login', function(req, res) {

    var url = CONFIG.targetServer + '/api/'+ req.body.userName;
    res.setHeader('Content-Type', 'application/json');
    let clientResponse = {};
    request(url, function (error, response, body) {
          if(response.body != '') {
            clientResponse['body'] = body;
            clientResponse['isLoggedin'] = true;
            res.send(clientResponse);
          }
          else {
              clientResponse['isLoggedin'] = false;
            res.send(clientResponse)
          }});
});


app.post('/update', function(req, res) {
    var url = CONFIG.targetServer + '/api/update';
    res.setHeader('Content-Type', 'application/json');
    let clientResponse = {};
    let reqbody = req.body.user;


    request.post({
      url:     url,
      form:    JSON.stringify(reqbody)
    }, function(error, response, body){
        if(response.body != '') {
            clientResponse['body'] = body;
            clientResponse['isDataSet'] = true;
            res.send(clientResponse);
          }
          else {
            clientResponse['isDataSet'] = false;
            res.send(clientResponse);
        }
    });

});


app.post('/users', function(req, res) {
    var url = CONFIG.targetServer + '/api/users';
    res.setHeader('Content-Type', 'application/json');
    let clientResponse = {};
    let connectedUserId = req.body.connectedUserId;

    request.post({
      url:     url,
      form:    JSON.stringify(connectedUserId)
    }, function(error, response, body){
        if(response.body != '') {
            clientResponse['body'] = body;
            clientResponse['isRecivedUsers'] = true;
            res.send(clientResponse);
          }
          else {
            clientResponse['isRecivedUsers'] = false;
            res.send(clientResponse);
        }
    });

});


app.listen(CONFIG.nodePort, () => console.log('running on localhost:'+ CONFIG.nodePort));