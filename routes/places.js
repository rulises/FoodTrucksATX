var fs = require('fs');
var path = '../data/curatedPlaces.json';

function readPlaces(path){
	fs.readFile(path, 'utf-8', function(err, data) {
		if(err) res.send(err);

		try{
			var json = JSON.parse(data);
			res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
			//callback(json.results);
		} catch (err){
			//callback(err);
			res.send(err);
			return err;
		}
	});
};

exports.findAllPlaces = function(req, res){
	res.send(readPlaces(path));
};