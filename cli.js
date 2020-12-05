const app = require('./src/app');

module.exports = {  
	run : (args) => {    
		app.run(args.slice(2));
	}
};