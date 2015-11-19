var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MedsDb');

var Schema = mongoose.Schema;

var medicineSchema = new Schema({
    name: String,
    hebName: String,
    price: Number
});

module.exports = mongoose.model('Medicines', medicineSchema);