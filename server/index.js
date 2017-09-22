import express from 'express';
import path from 'path';
var fs = require('fs');
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';


let app = express();

const compiler = webpack(webpackConfig)

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

app.get('/getProducts', (req,res) => {
    let json =  readJSONFile('./client/data/products.json', function (err, json) {
        if(err) { throw err; }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(json));
    });


});

app.listen(3000, () => console.log('running on localhost:3000'));