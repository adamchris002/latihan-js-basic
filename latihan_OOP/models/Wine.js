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
        let wine = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        wine = wine.map(elements => {
            const {id, name, year, type, createdAt} = elements;
            return new Wine(id, name, year, type, createdAt);
        })
        return wine;
    }

    static add(params) {
        let wine = this.getWine();
        let lastIndex = wine.length - 1;
        let id = wine[lastIndex].id + 1;
        let name = params [0];
        let year = Number(params [1]);
        let type = params [2];

        if (params === "R" || "r") {
            type += "Red";
        }
        else if (params === "W" || "w") {
            type += "White";
        }
        else {
            return `type ${type} not found`;
        }

        let createdAt = new Date();

        wine.push(new Wine(id, name, year, type, createdAt));
        this.save(wine);
        return `${name} has been added!`;
    }

    static save(wine) {
        let wineString = JSON.stringify(wine, null, 3);
        fs.writeFileSync('./data.json', wineString);
    }

    
}

module.exports = Wine;