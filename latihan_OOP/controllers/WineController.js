const Wine = require('../models/Wine');
const View = require('../views/View');

class WineController {
    static help() {
        View.help();
    }

    static wine() {
        let wines = Wine.wine();
        View.show(wines);
    }

    static add(params) {
        let anggur = Wine.add(params);
        View.show(anggur);
    }

    static sell(params) {
        let anggur = Wine.sell(params);
        View.show(anggur);
    }

    static rename(params) {
        let anggur = Wine.rename(params);
        View.show(anggur);
    }

    static findById(params) {
        let anggur = Wine.findByid(params);
        View.show(anggur);
    }

    static message(msg) {

    }
}

module.exports = WineController;