var mongoose = require('mongoose');
var path = require('path');
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
	}, { timestamps: true}); 


var Message = mongoose.model('Message', MessageSchema);