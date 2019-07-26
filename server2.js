const express = require('express');
const path = require('path');
const port = process.env.PORT || 9020;
const app = express();
const ssi=require("ssi");
const fs= require("fs");



 
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.get('', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/index.html'));
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
app.get('/libs/external_connect.js',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/libs/external_connect.js'));
});
app.get('/css/all.css',(req,res)=>{
	res.set('Content-Type', 'text/css');
	res.sendFile(path.resolve(__dirname+'/css/all.css'));
});
app.get('/external_api.js',(req,res)=>{
	res.sendFile(path.resolve(__dirname+'/modules/API/external/external_api.js'));
});

app.listen(port);

//You are connected to database "postgres" as user "postgres" via socket in "/var/run/postgresql" at port "5432".
