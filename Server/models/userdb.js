const mongoose = require('mongoose');
const Session = require('./sessiondb')

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [{
    id: {type: String, required: true},
    name: {type: String, required: true},
    rating: {type: Decimal128, required: true},
    review_count: {type: Number, required: true},
    location: {type: Object, required: true},
    price: {type: String, required: true},
    image_url: {type: String},
    transactions: {type: Array}
}],
  ignore: [String],
  sessionId: { type: Schema.Types.ObjectId, ref: 'Session'}
});

module.exports = mongoose.model('User', UserSchema);
