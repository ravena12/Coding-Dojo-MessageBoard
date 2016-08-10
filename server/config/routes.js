var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = function(app){
	//our app is rendering the index page
	app.get('/', function(req, res){
		console.log("Working")
		Message.find({})
		.populate('_comments')
		.exec(function(err, messages){
			console.log("********")
			console.log(messages);
			console.log("********")

			res.render('index', {messages: messages});
			});
		});
			
	app.post('/message', function(req, res) {
		console.log(req.body);
		var message = new Message({name: req.body.name, message: req.body.message});
		message.save(function(err) {
			if(err){
				console.log('something went wrong');
				res.render('index');
			} else {
				console.log('success');
				res.redirect('/');
			}
		})		

	})
	app.post('/comment/:id', function(req, res) {
		console.log(req.body);
		var message_id = req.params.id;
		Message.findOne({_id: message_id}, function(err, message) {
			var newComment = new Comment({name: req.body.name, comment: req.body.comment})
			console.log("!!!!!!!!!!!!!");
			console.log(newComment);
			console.log("!!!!!!!!!!!!!");
			newComment._message =  message_id;
			newComment.save(function(err){
				message._comments.push(newComment);
				message.save(function(err){
					res.redirect('/');
				})
				
			});
		});
	});
}

