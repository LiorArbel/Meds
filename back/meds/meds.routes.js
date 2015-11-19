var express = require('express');
var Medicine = require('./meds.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var query = {
        name: new RegExp(req.query.name),
        hebName: new RegExp(req.query.hebName)
    };

    Medicine.find(query, function (err, results) {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});

router.get('/:id/_get_by_components', function (req, res, next) {
    var query = {
        _id: req.params.id
    };

    Medicine.findOne(query, function (err, results) {
        if (err) {
            throw err;
        }

        var components = results.components;

        var mapFunction1 = function () {
            var isAll = true;
            this.components.forEach(function (ing) {
                var exists = false;
                components.forEach(function (org) {
                    if (org.name == ing.name) {
                        exists = true;
                    }
                });
                if (!exists) {
                    isAll = false;
                }
            });


            emit(isAll, this._id);
        };

        var reduceFunction1 = function (isAll, ids) {
            if (isAll) {
                if (ids[0].ids) {
                    return {
                        ids: ids[0].ids.concat(ids.slice(1))
                    }
                }
                else {
                    return {
                        ids: ids
                    }
                }
            }
        };

        Medicine.mapReduce({
            map: mapFunction1,
            reduce: reduceFunction1,
            out: {inline: 1},
            scope: {
                components: components
            }
        }, function (err, result) {
            Medicine.find({_id: {$in: result[1].value.ids}}, function (err, result1) {
                res.json(result1.slice(0, 50))
            })
        });
    });
});


router.post('/', function (req, res, next) {
    var medS = req.body;
    medS.nameLower = medS.name.toLowerCase();
    medS.pricePerUnit = medS.price / medS.quantity || undefined;

    var med = new Medicine(medS);
    med.save(function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    })
});

router.put('/component', function (req, res, next) {
    var igr = req.body.component;
    if (!req.body.component || !req.body.name) {
        res.json({shof: 'tembel'});
        return;
    }
    Medicine.find({name: new RegExp(req.body.name)})
        .then(function (meds) {
            if (!meds) {
                res.json({done: true});
                return;
            }
            var arrived = 0;
            meds.forEach(function (med) {

                if (!contains(med.component, igr)) {
                    med.component.push(igr);
                    med.save(function (err) {
                        if (err) {
                            throw err;
                        }
                        arrived += 1;
                        if (arrived == meds.length) {
                            res.json({shufi: 'homo'})
                        }
                    });
                } else {
                    arrived += 1;
                    if (arrived == meds.length) {
                        res.json({shufi: 'homo'})
                    }
                }
            })
        })
});

function contains(arr, val) {
    var y = false;
    arr.forEach(function (g) {
        if (g.name == val) {
            y = true;
        }
    });

    return y;
}

module.exports = router;
