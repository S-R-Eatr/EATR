const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const sessionSchema = new Schema({
  cookieId: {type: String},
  createdAt: {type: Date, expireAfterSeconds: 300},
  userId: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Session', sessionSchema);
