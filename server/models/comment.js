var mongoose = require('mongoose');
var path = require('path');
var Schema = mongoose.Schema;


var CommentSchema = new mongoose.Schema({
	name: String,
	comment: String,
	_message: { type: Schema.Types.ObjectId, ref: 'Message'}
	}, { timestamps: true}); 


var Comment = mongoose.model('Comment', CommentSchema);