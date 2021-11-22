var mongoose = require('mongoose');
const imovelSchema = require('../models/imovel');

const Imovel = mongoose.model('imovel', imovelSchema);
module.exports = Imovel;