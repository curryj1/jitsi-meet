const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

 



//require webpack-dev-server.js?
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

app.get('', (req, res) => {
    res.sendFile(__dirname +'/index.shtml');
});
app.get('/libs/app.bundle.min.js', (req, res) => {
  res.sendFile(path.resolve(__dirname +'/build/app.bundle.min.js'));
});

app.get('/libs/do_external_connect.min.js', (req, res) => {
  res.sendFile(path.resolve(__dirname +'/build/do_external_connect.min.js'));
});
app.get('/libs/lib-jitsi-meet.min.js',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/node_modules/lib-jitsi-meet/lib-jitsi-meet.min.js'));
});
app.get('/libs/analytics-ga.min.js',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/build/analytics-ga.min.js'));
});
app.get('/external_api.js',(req,res)=>{
	res.sendFile(path.resolve(__dirname+'/build/external_api.min.js'));
});
app.get('/intern',(req,res)=>{
	res.sendFile(path.resolve(__dirname+'/index.shtml'));
});
app.get('/css/all.css',(req,res)=>{
	res.sendFile(path.resolve(__dirname +"/css/all.css"));
});

// Serve the files on port 3000.
app.listen(port, function () {
  console.log('Example app listening on port 3000!\n');
});