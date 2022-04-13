const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SessionSchema = new Schema({
  cookieId: {type: String},
  createdAt: {type: Date, expireAfterSeconds: 300}
});

module.exports = mongoose.model('Session', SessionSchema);
