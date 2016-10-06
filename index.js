var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

username = "your instagram username"
password = "your instagram password"

var Client = require('instagram-private-api').V1;
var device = new Client.Device('kdkamaldeep2');
var storage = new Client.CookieFileStorage(__dirname + '/cookies/username.json');
var _session;

function login_to_igrm_and_upload_image()
{ 
  // And go for login 
	Client.Session.create(device, storage, username, password)
	.then(function(session) {
		return [session, Client.Account.searchForUser(session, 'instagram')]   
	})
	.spread(function(session, account) {        
		upload_photo_to_ingrm(session)
	});
};


function upload_photo_to_ingrm(session)
{
	Client.Upload.photo(session, './images/a8.jpg')
	    .then(function(upload) {
		console.log(upload.params.uploadId);
		return Client.Media.configurePhoto(session, upload.params.uploadId, 'akward caption');
	    })
	    .then(function(medium) {
		console.log(medium.params)
	    })
}


//Login to instagram and upload image
login_to_igrm_and_upload_image();






















