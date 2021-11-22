'use strict';
const config = require('../config/database');

const Imovel = require('../repository/imovelRepository');

module.exports = new class ImovelRepository {

    getAll() {
        return Imovel.find();
    }

    getById(id) {
        return Imovel.findById(id);
    }

    create(Imovel) {
        return Imovel.create(Imovel);
    }
}

