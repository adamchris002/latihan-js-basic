const command = process.argv[2];
const params = process.argv.slice(3);
const WineController = require('./controllers/WineController');

switch (command) {
    case 'help' :
        WineController.help();
        break;
    case 'wine' :
        WineController.wine();
        break;
    case 'add' :
        WineController.add(params);
        break;
    case 'sell' :
        WineController.sell(params);
        break;
    case 'rename' :
        WineController.rename(params);
        break;
    case 'findByid' :
        WineController.findById(params);
        break;
    case 'group' : 
        WineController.group(params);
    default:
        WineController.message("Unknown Command");
}