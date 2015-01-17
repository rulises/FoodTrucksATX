function places() {
	var fs = require('fs');
	var obj;
	fs.readFile('./data/curatedPlaces.json', 'utf8', function (err, data) {
	if (err) throw err;
	obj = JSON.parse(data);
	});
	return obj.results;

}



module.exports = my_parser;