const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');

const schema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: String,
    required: true
  },
  restaurante: {
    type: Schema.Types.ObjectId,
    ref: 'restaurante',
    required: true
  }
},{
    timestamps: true
});
  
module.exports = mongoose.model('plato', schema);
