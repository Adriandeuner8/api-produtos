/**
 * Descrição: arquivo responsavel pelo tratamento do modelo da classe 'produto'
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
});

module.exports = mongoose.model('Produto', ProdutoSchema);