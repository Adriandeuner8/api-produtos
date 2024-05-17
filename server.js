
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let mongoose = require('mongoose');
let Produto = require('./app/models/produtos');
const produtos = require('./app/models/produtos');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

let port = process.env.port || 5001;
app.listen(port);
console.log(`Iniciando a app na porta ${port}`);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://adi:123@adi.dbsvnsz.mongodb.net/');

// ROTAS:

let router = express.Router();

router.use(function(req, res, next){
    console.log('PASSOU NA MINDWARE!');
    next();
});

router.get('/', function(req, res) {
    res.json({ mensage: "BEM VINDO AO INICIO"})
});

router.route('/produtos')

    .get(function(req, res){
        Produto.find()
            .then(produtos => {
                res.json(produtos);
            })
            .catch(error => {
                res.status(500).send(`Erro ao tentar selecionar todos os produtos! ${error}`);
            });
    })

    .post(function(req, res) {
       let produto = new Produto();

        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;

        produto.save()
            .then(() => {
                res.json({ mensagem: "Produto cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send(`Erro ao tentar salvar o Produto! ${error}`);
            });
    })

router.route('/produtos/:produto_id')

    .get(function(req, res) {
        Produto.findById(req.params.produto_id)
            .then(produto => {
                if (!produto) {
                    return res.status(404).json({ mensagem: "Produto não encontrado" });
                }
                res.json(produto);
            })
            .catch(error => {
                res.status(500).send(`Erro ao selecionar o Produto! ${error}`);
            });
    })

    .put(function(req, res) {
        Produto.findById(req.params.produto_id)
            .then(produto =>{
                produto.nome = req.body.nome;
                produto.preco = req.body.preco;
                produto.descricao = req.body.descricao;

                produto.save()
                    .then(() => {
                        res.json({ mensagem: "Produto atualizado com sucesso!" });
                    })
                    .catch((error) => {
                        res.status(500).send(`Erro ao tentar atualizar o Produto! ${error}`);
                    })
            
            .catch((error) => {
                res.status(500).send(`Erro ao tentar atualizar o Produto! ${error}`);                
            });    
        })
    })

    .delete(function(req, res) {
        Produto.findOneAndDelete({ _id: req.params.produto_id })
            .then(produto => {
                if (!produto) {
                    return res.status(404).json({ mensagem: "Produto não encontrado" });
                }
                res.json({ mensagem: "Produto removido com sucesso" });
            })
            .catch(error => {
                res.status(500).send(`Erro ao remover o Produto! ${error}`);
            });
    });
    

app.use('/api', router);


