var fs = require('fs');
var path = '../data/curatedPlaces.json';

function readPlaces(path){
	fs.readFile(path, 'utf-8', function(err, data) {
		if(err) return err;

		try{
			var json = JSON.parse(data);
			return 'hello';
			//return json;
			//callback(json.results);
		} catch (err){
			//callback(err);
			return err;
		}
	});
};

exports.findAllPlaces = function(req, res){
	res.send(readPlaces(path));
};