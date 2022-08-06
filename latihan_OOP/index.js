const command = process.argv[2];
const WineController = require('./controllers/WineController');

switch (command) {
    case 'help' :
        WineController.help();
        break;
}