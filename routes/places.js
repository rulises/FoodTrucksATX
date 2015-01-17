var fs = require('fs');
var path = '../data/curatedPlaces.json';

function readPlaces(path){
	fs.readFile(path, 'utf-8', function(err, data) {
		if(err) res.send(err);

		try{
			res.send([{key:'parsing'}]);
			var json = JSON.parse(data);
		} catch (err){
			//callback(err);
			res.send([{key:'error'}]);
			return err;
		}
	});
};

exports.findAllPlaces = function(req, res){
	res.send(readPlaces(path));
};