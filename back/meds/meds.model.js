var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MedsDb2');

var Schema = mongoose.Schema;

var medicineSchema = new Schema({
    name: String,
    hebName: String,
    nameLower: String,
    description: String,
    components: {
        type: [{
            name: String,
            quantity: Number,
            unit: String
        }],
        defaults: []
    },
    quantity: Number,
    price: Number,
    pricePerUnit: Number
});

module.exports = mongoose.model('Medicines', medicineSchema);