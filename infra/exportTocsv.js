const json2csv = require('json2csv').parse;
const fs = require('fs');
var uuid = require('uuid');

const fields = ['_id', 'URL', 'info:', 'nome', 'descricao','quartos','area','suite', 'local:', 'cidade', 'bairro', 'mapa', 'construcao', 'sataus', 'enum', ' inicio', 'fim', 'financeiro', 'valor', 'sinal', 'promocao' ];
const opts = { fields };


module.exports.tocsv = function (imovel) {
    try {

        const csv = json2csv(imovel, opts);
        const filename = uuid.v4() + ".csv"
        fs.writeFile('./exports/' + filename, csv, function (err) {
            if (err) throw err;
            console.log('file saved');
        });

        return filename;

    } catch (err) {
        console.error(err);
    }
}

