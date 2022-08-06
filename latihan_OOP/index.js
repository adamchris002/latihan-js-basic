const command = process.argv[2];
const params = process.argv.slice[3];
const WineController = require('./controllers/WineController');

switch (command) {
    case 'help' :
        WineController.help();
        break;
    case 'wine' :
        WineController.wine();
    case 'add' :
        WineController.add(params);
}