const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');

const schema = new Schema({
  cuenta: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  tipo_identificacion: {
    type: String,
    required: true
  },
  numero_identificacion: {
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
  telefono: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  }
},{
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.password;
      }
    }
});

schema.pre('save', function(next) {
  const user = this;
  
  if(user.isNew || user.isModified('password')){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash;
        next();
      });
    });
  }else{
    next();
  }
});

schema.methods.comparePassword = function(password, next) {
  const user = this;
  bcrypt.compare(password, this.password, function(err, match) {
    if (err) {
      next(new Error(err))
    } else {
      next(null, match);
    }
  });
}
  
module.exports = mongoose.model('user', schema);
