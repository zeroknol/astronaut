var mongoose = require('mongoose');

const CONNSTRING = process.env.DB_CONNSTRING;
const schema = new mongoose.Schema({
    id: { type: String},
    viewCount: {type: Number, default: 0},
    duration: {type: Number, default: 0},
    uploaded: {type: Date },
    fetched: {type: Date },
    query: { type: String}
  });
module.exports = mongoose.model('Videos', schema);
