let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let modelSchema = new Schema({
	descripcion : { type: String , required: true },
	precio : { type: String , required: true }
});
model = mongoose.model('producto',modelSchema,'producto');
module.exports = model;
