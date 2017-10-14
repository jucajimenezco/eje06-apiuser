const router = require('express').Router();
const handler = require('../utils/handler');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/unidad02', {
  useMongoClient: true
});

const User = require('../models/user.model');

module.exports = () => {

    router.get('/', (req, res) => {
        User.find({})
        .sort()
        .exec(handler.handleMany.bind(null, 'users', res));
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        User.find({_id:id})
        .sort()
        .exec(handler.handleMany.bind(null, 'users', res));
    });

    /* insercionnes */
    router.post('/',(req,res) =>{
    //recibir parametros
    const usuario = req.body;

    user.create(usuario)
    .then(
    function(data) {
        console.log(data);
        res.json(data);
    }
    )
.catch(
    function(err){
        console.log(err);
        res.status(400);
        res.json({error:err});
    }
);
    });

    return router;
}