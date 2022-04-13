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
    console.log(BCRYPT_SALT)
    const salt = bcrypt.genSaltSync(BCRYPT_SALT);
    console.log(salt)
    console.log(this)
    this.password = bcrypt.hashSync(this.password, salt);
    return next();
  } catch (err) {
    return next(err)
  }
})

userSchema.methods.validatePassword = async function validatePassword(data) {
  console.log(data)
  console.log(this) 
  return bcrypt.compare(data, this.password)
}

module.exports = mongoose.model('User', userSchema);
