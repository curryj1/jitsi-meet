const express = require('express');
const path = require('path');
const port = process.env.PORT || 9020;
const app = express();
const ssi=require("ssi");
const fs= require("fs");




 
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(__dirname+'/build'));
app.use(express.static(__dirname+'/libs'));


app.get('/libs/lib-jitsi-meet.min.js',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/node_modules/lib-jitsi-meet/lib-jitsi-meet.min.js'));
});


app.get('/intern',(req,res)=>{
	res.sendFile(path.resolve(__dirname+'/index.html'));
});

//in conference.js there is a function called connect which needs roomname as an atribute.
// try to require the conference.js and use the connect function to get the roomname for the url.
app.listen(port);

//You are connected to database "postgres" as user "postgres" via socket in "/var/run/postgresql" at port "5432".
