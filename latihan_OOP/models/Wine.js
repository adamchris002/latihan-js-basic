const fs = require('fs');

class Wine {
    constructor(id, name, year, type, createdAt) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.type = type;
        this.createdAt = createdAt;
    }

    static getWine() {
        let Wine = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        Wine = Wine.map(elements => {
            const {id, name, year, type, createdAt} = elements;
            return new Wine(id, name, year, type, createdAt);
        })
        return Wine;
    }
}

module.exports = Wine;