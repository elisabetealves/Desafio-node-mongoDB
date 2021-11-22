const mongoose = require('mongoose');

const mapType = require('./map.js');

const schema = mongoose.Schema({
  URL: { 
    type: String, required:true, index: true, unique: true, match: /[a-z][a-z-]*/ 
  },
  info: {
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    quartos: {type: Number, required: true, min: 1, max: 9},
    area: {type: Number, required: true, min: 10, max: 9999},
    suite: {type: Boolean, default: false},
  },
  local: {
    cidade: { type: mongoose.Schema.Types.ObjectId, ref: 'Cidade' },
    bairro: { type: String, required: true },
    mapa: { type: mapType, required: true }
  },
  construcao: {
    status: { type: String, required: true, enum: ['planta', 'obras', 'semi', 'pronto'] },
    inicio: { type: Date, required: true },
    fim: { type: Date, required: true }
  },
  financeiro: {
    valor: { type: Number, required: true },
    sinal: { type: Number, required: true },
    promocoes: [{ type: String }]
  }
}, {
    versionKey: false
});

module.exports = mongoose.model('Imovel', schema, 'imoveis');
