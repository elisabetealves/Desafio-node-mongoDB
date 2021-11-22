const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  lat: { type: Number, required: true, min: -85, max: 85 },
  lon: { type: Number, required: true, min: -180, max: 180 },
},{
  _id : false,
  versionKey: false
});