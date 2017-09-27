// TODO I just hacked this up to populate dummy data, there must be a better way.
var http = require("http");
var count = 0;
var options = {
	host: 'localhost',
	port: 8080,
	path: '/api/v1/unittypes',
	method: 'POST',
	headers: {
		accept: 'application/json',
		'content-type': 'application/json'
	}
};

function sendNext() {
	var req = http.request(options, function (res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			console.log('BODY: ' + chunk);
			if (count < 100) {
				sendNext();
			} else {
				req.end();
			}
		});
	});
	req.on('error', function (e) {
		console.log('problem with request: ' + e.message);
	});
	addNext(req);
}

function addNext(req) {
	var idx = count++;
	let data = {
		businessKey: "bk" + idx,
		description: "description for unit type " + idx
	};
	req.write(JSON.stringify(data) + '\n');
}

sendNext();
