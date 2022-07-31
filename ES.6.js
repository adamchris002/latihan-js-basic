/**
 * ITems Transaction / CRUD (Create Read Update Delete)
 * 
 * A. Buatlah sebuah function untuk mencetak isi Items
 * 
 * Result:
 * 
 * List Items:
 * 1. [X] masker sensa, Rp. 100000
 * 2. [X] susu beruang, Rp. 15000
 * 3. [ ] minyak goreng, Rp. 35000
 * 
 * B. Buatlah sebuah function untuk menambahkan isi Items
 * 
 * Result:
 * 
 * addItem("vitamin c", 150000, false, 15)
 * 
 * "vitamin c" has been added to items!
 * 
 * C. Buatlah sebuah function untuk menghapus isi items berdasarkan id.
 * 
 * Result:
 * 
 * deleteItem(3)
 * Id 3 has been deleted.
 * 
 * deleteItem(7)
 * Id 7 not found.
 */

 var items = [ 
    {
        id : 1, 
        name : "masker sensa",
        price : 35000,
        isSold : true,
        stock : 50
    },
    {
        id : 2, 
        name : "susu beruang",
        price : 15000,
        isSold : true,
        stock : 50
    },
    {
        id : 3, 
        name : "minyak goreng",
        price : 35000,
        isSold : false,
        stock : 50
    }

]

//ES6

//soal A
const printItem = (array) => array.forEach(elements => console.log(`${elements.id} ` + (elements.isSold ? '[X]' : '[ ]') + ` ${elements.name}, Rp. ${elements.price}`));
// printItem(items);

//soal B
const addItem = (name, price, isSold, stock) => {
    var lastIndex = items.length - 1;
    var id = items[lastIndex].id + 1;

    Object.assign(items, {id, name, price, isSold, stock});
}

// addItem("adam", 30000, true, 3);

const deleteItem = (id) => {
    let temp = [];
    items.forEach(elements => elements.id !== id ? temp.push(elements) : "");
    lastIndex = items.length - 1
    temp.length === items.length ? console.log(`id ${id} tidak ditemukan.`) : items = temp;
    console.log(items);
}

// console.log(items);
deleteItem(1);



