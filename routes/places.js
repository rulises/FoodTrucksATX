var fs = require('fs');
var path = './data/curatedPlaces.json';

function readPlaces(path, res){
	fs.readFile(path, 'utf-8', function(err, data) {
		if(err) res.send([{key:'err'}]);

		try{
			res.send([{key:'parsing'}]);
			var json = JSON.parse(data);
		} catch (err){
			//callback(err);
			res.send([{key:'error'}]);
		}
	});
};

exports.findAllPlaces = function(req, res){
	readPlaces(path, res);
};