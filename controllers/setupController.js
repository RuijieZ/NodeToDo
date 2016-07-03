var Todos = require('../models/todoModel');

module.exports = function(app) {
	app.get('/api/setupTodos', function(req, res) {
		// seed my data base

		var starterTodos = [
			{
				username: 'test',
				todo: 'Buy Milk',
				isDone: false,
				hasAttachement: false
			},
			{
				username: 'test',
				todo: 'have fun',
				isDone: false,
				hasAttachement: false	
			},
			{
				username: 'test',
				todo: 'learn node',
				isDone: false,
				hasAttachement: false
			}
		];
		Todos.create(starterTodos, function(err, results) {
			res.send(results);
		});
	});
}