var express = require('express');
var app = express();

var mongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://localhost:27017/';

app.get('/vaccineNoHarm', function(req, res) {
	res.sendFile(__dirname + "/" + "vaccine.html");
})

app.get('/favicon.ico', function(req, res) {
	res.sendFile(__dirname + "/" + "favicon.ico");
})

app.get('/vaccine', function(req, res) {
	res.send("疫苗怎么可能有副作用！斩钉截铁的回答我！！！");
})

app.get('/vaccine_by_company', function(req, res) {
	console.log(req.query.company + Date());
	queryMongodb(req, res);	
})

app.get('/vaccine_cccs', function(req, res) {
	console.log("vaccine_get_cccs");
	req.query.company = "长春长生";
	queryMongodb(req, res);
})

var server = app.listen(8080, function() {
	var host = server.address().address
	var port = server.address().port
   
	console.log("please visit http://%s:%s", host, port)
}) 

function queryMongodb(req, res) {
	mongoClient.connect(mongoURL, {useNewUrlParser:true}, function (err, db) {
		if (err) {
			console.log("connect to mongodb failed: %s", JSON.stringify(err));
			throw err;
		}
		
		var dbase = db.db("test");
		dbase.collection("vaccine").find({
			prov: RegExp(req.query.prov),
			create_company: RegExp(req.query.company),
			name: RegExp(req.query.name)		
		}).toArray(function (err, result) {
			if (err) {
				console.log("query mongodb failed: %s", JSON.stringify(err));				
				throw err;
			}			
			//findDistinctCompany(result);
						
			if (result.length > 0) {
				res.json(result);
			} else {
				res.json(["No result, please change query conditions."]);
			}	
			
			db.close();	
		});
	 });
}

function findDistinctCompany(result) {
	var companies = new Object();
	for (var i = 0; i < result.length; i++) {
		if (result[i].create_company in companies) {
			companies[result[i].create_company]++;
		} else {
			companies[result[i].create_company] = 1;
		}
	}
	console.log(companies);
}

