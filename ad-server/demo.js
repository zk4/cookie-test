const express = require('express')
const app = express()
const path = require('path');  
const fs = require('fs');  
const https = require('https');  
const http = require('http');  

// var privateKey  = fs.readFileSync(path.join(__dirname, './private.pem'), 'utf8');
// var certificate = fs.readFileSync(path.join(__dirname, './file.crt'), 'utf8');
//  safari ok
// var privateKey  = fs.readFileSync(path.join(__dirname, '../certificate/key.pem'), 'utf8');
// var certificate = fs.readFileSync(path.join(__dirname, '../certificate/certificate.pem'), 'utf8');

var privateKey  = fs.readFileSync(path.join(__dirname, '../key.pem'), 'utf8');  
var certificate = fs.readFileSync(path.join(__dirname, '../cert.pem'), 'utf8');  
var credentials = {key: privateKey, cert: certificate};  
  
var httpServer = http.createServer(app);  
var httpsServer = https.createServer(credentials, app);  


//可以分别设置http、https的访问端口号  
var PORT = 8000;  
var SSLPORT = 8001;  

app.get('/', (req, res) => {
  res.send(`cookies: ${JSON.stringify(req.cookies)}`)
})
app.get('/ad.js', (req, res) => {
  let options = {
    // maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    domain: '.ad.zk',
    // httpOnly: true, // The cookie only accessible by the web server
    // signed: true // Indicates if the cookie should be signed
    sameSite: 'none'
  }

  // Set cookie
  res.cookie('aid', '12345678', options) // options is optional
  res.send('')
})

httpsServer.listen(SSLPORT, function() {  
    console.log('HTTPS Server is running on: https://ad.zk:%s', SSLPORT);  
});  
