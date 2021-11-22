const db = require('./config/database');
const imovelRepository = require('./repository/imovelRepository');

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('./imovel.csv')
    .pipe(csv())
    .on('data', (row) => {
        imovelRepository.create(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
    });