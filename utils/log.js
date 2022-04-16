const chalk = require('chalk');
const readline = require('readline');
module.exports = (data, option) => {
	readline.cursorTo(process.stdout, 0);
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	readline.cursorTo(process.stdout, 0);
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ LOADER ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ LOADER ] » ') + data);
			break;
    	case "fb":
      		console.log("\n"+chalk.green('[ FACEBOOK ] » ') + data);
      		break;
		default:
			console.log(chalk.green(`[ LOADER ] » `) + data);
			break;
	}
}
