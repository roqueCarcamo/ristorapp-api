const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');

const schema = new Schema({
  restaurante: {
    type: Schema.Types.ObjectId,
    ref: 'restaurante',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  plato:{
    type: Schema.Types.ObjectId,
    ref: 'plato'
  },
  cant_platos: {
    type: String,
    required: true
  },
  valor_total: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  tiempo: {
    type: String,
    required: true
  }
},{
    timestamps: true
});
  
module.exports = mongoose.model('pedido', schema);
