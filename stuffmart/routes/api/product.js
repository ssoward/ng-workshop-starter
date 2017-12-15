var express = require('express');

var router = express.Router();

var _ = require('lodash');

let db;

let OK = { message: 'ok' };

router.get('/', function (req, res, next) {

    if(req.query.findText == null) {
        res.send(db.products);
        return;
    }

    // return a filtered search
    let findText = req.query.findText.toLowerCase();

    let _products = _.filter(db.products, product => {
        console.log(findText);
    console.log(product.price);
    console.log(product.price == findText);
    console.log('-------------------');
        let list = _.includes(product.name.toLowerCase(), findText) ||  _.includes(product.description.toLowerCase(), findText) || (product.price == findText);
    return list;
});

    res.send(_products);

});

router.get('/:id', function (req, res, next) {

    let productId = parseInt(req.params.id, 10);

    let product = _.find(db.products, p => p.id === productId );
    res.send(product);
});

router.post('/', function (req, res, next) {

    let product = req.body;
    product.id = _(db.products).map(p => p.id).max() + 1;
    db.products.push(product);

    res.send(OK);
});

router.put('/:id', function (req, res, next) {

    let productId = parseInt(req.params.id, 10);
    let _product = req.body;

    let _products = _.filter(db.products, p => p.id != productId);
    _products.push(_product);

    db.products = _.sortBy(_products,'id');

    res.send(OK);
});

router.delete('/:id', function (req, res, next) {

    let productId = parseInt(req.params.id, 10);
    db.products = _.filter(db.products, p => p.id != productId);

    res.send(OK);
});


router.init = function(_db) {

    db = _db;
    return router;

}


module.exports = router;