var express = require('express');
var Medicine = require('./meds.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var query = {
        name: req.query.name,
        hebName: req.query.hebName
    };

    Medicine.find({}, function (err, results) {
        if(err){
            throw err;
        }
        res.json(results);
    })
});

router.post('/', function (req, res, next) {
    var med = new Medicine(req.body);
    med.save(function (err, result) {
        if(err){
            throw err;
        }
        res.json(result);
    })
});

module.exports = router;
