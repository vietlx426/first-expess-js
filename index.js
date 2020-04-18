var express=require('express');
var app=express();
var port=3000;

app.get('/', (request, response) => response.send('Today is Saturday'))

app.listen(port,function(){
	console.log('Server listening on port '+port);
});