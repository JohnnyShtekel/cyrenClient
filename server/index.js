import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
let fs = require('fs');
let bodyParser = require('body-parser');

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const compiler = webpack(webpackConfig);


function readJSONFile(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if(err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch(exception) {
            callback(exception);
        }
    });
}


app.use(webpackMiddleware(compiler, {
	hot:true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true 
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'./index.html'));
});


app.post('/login', function(req, res) {

    let MockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"

    res.setHeader('Content-Type', 'application/json');
    if(req.body.userName === "1" && req.body.password === "1")
    {
        console.log({"isLoggedin": true});
        res.send(JSON.stringify({"access_token":MockToken,"isLoggedin": true}))
    }
    else {
        console.log({"isLoggedin": false});
        res.send(JSON.stringify({"isLoggedin": false}))
    }

});

app.post('/isLoggedin', function(req, res) {

    let MockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"

    res.setHeader('Content-Type', 'application/json');
    if(req.body.access_token === MockToken )
    {
        console.log({"isLoggedin": true});
        res.send(JSON.stringify({"isLoggedin": true}))
    }
    else {
        console.log({"isLoggedin": false});
        res.send(JSON.stringify({"isLoggedin": false}))
    }

});

app.post('/register', function(req, res) {

    let MockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"

    res.setHeader('Content-Type', 'application/json');
    if(req.body.userName === "1" && req.body.password === "1")
    {
        console.log({"isRegistered": true});
        res.send(JSON.stringify({"access_token":MockToken,"isRegistered": true}))
    }
    else {
        console.log({"isRegistered": false});
        res.send(JSON.stringify({"isRegistered": false}))
    }

});

app.post('/isRegistered', function(req, res) {

    let MockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"

    res.setHeader('Content-Type', 'application/json');
    if(req.body.access_token === MockToken )
    {
        console.log({"isRegistered": true});
        res.send(JSON.stringify({"isRegistered": true}))
    }
    else {
        console.log({"isRegistered": false});
        res.send(JSON.stringify({"isRegistered": false}))
    }
});


app.listen(5000, () => console.log('running on localhost:5000'));