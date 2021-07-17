const mongoose = require('mongoose');
var Video = require('./video_model.js');

const CONNSTRING = process.env.DB_CONNSTRING;
function connectToDatabase() {
  const client = mongoose.connect(
	  CONNSTRING, {
		  useNewUrlParser: true,
		  useUnifiedTopology: true,
		  tls: true,
		  tlsCAFile: "./ca-certificate.crt",
	  });
  return client;
}

function readVideos(cb) {
  const db = connectToDatabase();
  Video.find().exec(function(err, videos){
    cb(videos);
  });
}

// expects [{id, viewCount, duration, uploaded, fetched}, ]
function writeVideos(videos) {
  var csvWriter = csvStringify({columns: COLUMNS});
  csvWriter.on('error', (err) => {
    console.error(err.message);
  });
  csvWriter.pipe(fs.createWriteStream(DATA_FILE));

  videos.forEach(function(video) {
   csvWriter.write(video);
  });

  csvWriter.end();
}

exports.readVideos = readVideos;
exports.writeVideos = writeVideos;
exports.filename = function() {
  return DATA_FILE;
};
