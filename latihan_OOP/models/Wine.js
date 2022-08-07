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

    static wine() {
        let wine = this.getWine();
        let temp = "";
        let count = 1;
        wine.forEach(element => {
            temp += (`${count++}. ${element.name} ${element.year}\n`)
        });
        return temp;
    }

    static add(params) {
        let temp = params.toString();
        const myArray = temp.split("/");
        let wine = this.getWine();
        let lastIndex = wine.length - 1;
        let id = wine[lastIndex].id + 1;
        let name = myArray[0];
        let year = Number(myArray[1]);
        let type = myArray[2];

        if (type === 'R' || 'r') {
            type = "Red";
        }
        else if (type === 'W' || 'w') {
            type = "White";
        }
        else {
            return `There is no type of ${type} wine!`
        }
        let createdAt = new Date();

        wine.push(new Wine(id, name, year, type, createdAt));
        this.save(wine);
        return `"${name}" has been added!`;
    }

    static save(params) {
        let wineString = JSON.stringify(params, null, 3);
        fs.writeFileSync('./data.json', wineString);
    }

    static sell(params) {
        let wine = this.getWine();
        let id = Number(params[0]);
        let wineName = "";
        wine.forEach(element => {
            if (element.id === id) {
                wineName += element.name;
            }
        })
        wine = wine.filter(element => element.id !== id);
        this.save(wine);
        return `"${wineName}" has been sold!`;
    }
    
    static rename(params) {
        let index = Number(params[0]);
        let temp = params.toString();
        const stringArray = temp.substr(2, temp.length - 1);
        let obj = stringArray.split("/");
        let newName = obj[0];
        let newYear = Number(obj[1]);
        let newType = obj[2];

        if (newType === "R" || "r") {
            newType = "Red";
        }
        else if (newType === "W" || "w") {
            newType = "White";
        }
        else {
            `${newType} type not found`;
        }

        let wine = this.getWine();
        wine = wine.map(element => {
            if (element.id === index) {
                element.name = newName;
                element.year = newYear;
                element.type = newType;
            }

            return element;
        })
        this.save(wine);
        return `Wine number ${index} has been renamed!`;
    }

    static findByid(params) {
        let wine = this.getWine();
        let id = Number(params[0]);
        const YearNow = new Date().getFullYear();

        let temp = "";

        wine.forEach(element => {
            if (element.id === id) {
                temp += `${element.name} is ${element.type} with age of ${YearNow - element.year}`;
            }
            else {
                return `Id is not found!`;
            }
            return temp;
        })
        return temp;
    }

    static group (params) {
        let wine = this.getWine();
        let wineType = params[0];

        wine = wine.filter(element => element.type === wineType);
        return wine;
    }
    
}

module.exports = Wine;