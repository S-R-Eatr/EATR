const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const BCRYPT_SALT = Number(process.env.BCRYPT_SALT);

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [],
//     id: {type: String, required: true},
//     name: {type: String, required: true},
//     rating: {type: Number, required: true},
//     review_count: {type: Number, required: true},
//     location: {type: Object, required: true},
//     price: {type: String, required: true},
//     image_url: {type: String},
//     transactions: {type: Array}
// }],
  ignore: [String],
  sessionId: { type: Schema.Types.ObjectId, ref: 'Session'}
});

userSchema.pre('save', function save(next) {
  try {
    const salt = bcrypt.genSaltSync(BCRYPT_SALT);
    console.log(salt);
    this.password = bcrypt.hashSync(this.password, salt);
    console.log(salt, this.password);
    return next();
  } catch (err) {
    return next(err)
  }
})

userSchema.methods.validatePassword = async (data) => {
  return bcrypt.compare(data, this.password)
}

module.exports = mongoose.model('User', userSchema);
