class Cookie {
    constructor (name, price, ingridients, type) {
        this.name = name;
        this.price = price;
        this.ingridients = ingridients;
        this.type = type;
    }
}


class Chocolate extends Cookie {
    constructor (name, price, ingridients, isSweet) {
        super(name, price, ingridients, "Chocolate");
        this.isSweet = isSweet;
    }
}

class Sweet extends Cookie {
    constructor (name, price, ingridients, isSweet) {
        super(name, price, ingridients, "Sweet");
        this.isSweet = isSweet;
    }
}

class Strawberry extends Cookie {
    constructor (name, price, ingridients, isSweet) {
        super(name, price, ingridients, "Strawberry");
        this.isSweet = isSweet;
    }
}

class Kitchen {
    constructor(container) {
        this.container = container || [];
    }
    bake(cookies) {
        this.container.push(cookies);
    }
    eat(cookie_name) {
        let temp = [];
        this.container.forEach(elements => {
            if (elements.name !== cookie_name) {
                temp.push(elements);
            }
        })
        this.container = temp;
        console.log(`${cookie_name} has been deleted`);
    }
    addSugar(cookie_name) {
        this.container = this.container.map(element => {
            if (element.name === cookie_name) {
                element.isSweet = true;
            }
            return element;
        });
        console.log(`${cookie_name} has been added sugar!`);
    }
    showCookies() {
        console.log(this.container);
    }
}


let chocolate1 = new Chocolate("Chocolate Cookie", 145000, "Black Chocolate", true);
let sweet1 = new Sweet("Sweet Cookie", 100000, "Sugar", true);
let strawberry1 = new Strawberry("Strawberry Cookie", 120000, "Australian Strawberry", false);

const kitchen = new Kitchen(); 

kitchen.bake(chocolate1);
kitchen.bake(sweet1);
kitchen.bake(strawberry1);
kitchen.eat("Chocolate Cookie");
kitchen.addSugar("Strawberry Cookie");
kitchen.showCookies();
