const Wine = require("../models/Wine");
const View = require("../views/View");

class WineController {
    static help() {
        View.help();
    }

    static wine() {
        let wine = Wine.getWine();
        View.show(wine);
    }

    static add(params) {

    }

    static sell(params) {

    }

    static rename(params) {

    }

    static findById(params) {

    }
}

module.exports = WineController;