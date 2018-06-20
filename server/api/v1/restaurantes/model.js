const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');

const schema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
    validator: function(value) {
        return validator.isEmail(value);
      },
      message: '{VALUE} is not a valid email address'
    },
  },
  direccion: {
    type: String,
    required: true
  },
  cant_mesas: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  calificacion: {
    type: String,
    required: true
  }
},{
    timestamps: true
});
  
module.exports = mongoose.model('restaurante', schema);
