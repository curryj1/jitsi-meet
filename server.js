const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.shtml'));
});
app.get('/libs/app.bundle.min.js', (req, res) => {
  res.sendFile(path.resolve(__dirname +'/build/app.bundle.min.js'));
});

app.get('/libs/do_external_connect.min.js', (req, res) => {
  res.sendFile(path.resolve(__dirname +'/build/do_external_connect.min.js'));
});
app.get('/libs/lib-jitsi-meet.min.js',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/node_modules/lib-jitsi-meet/lib-jitsi-meet.min.js'));
})
app.get('/css/all.css',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/css/all.css'));
})
app.get('/images/watermark.png',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/images/watermark.png'));
})
app.get('/fonts/jitsi.ttf',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/fonts/jitsi.'));
})
app.listen(port);

//