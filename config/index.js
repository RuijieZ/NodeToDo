var configValues = require("./config");

module.exports = {

	getConnectionString: function() {
		return 'mongodb://' + 
				configValues.username + ':' + 
				configValues.password + '@ds011775.mlab.com:11775/node-to-do';
	}
};