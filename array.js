//soal nomor 1 a

let watches = ["Swiss Army", "Daniel Wellington", "Dublot"];

var string = "Saya punya ";

for (var i = 0; i < watches.length - 1; i++) {
    string += watches[i] + ", ";
}
string += "dan " + watches[watches.length - 1];

console.log(string + ".");


//soal nomor 1 b

var string1 = "Saya punya ";

let arloji = ['A', 'B', 'C', 'D','E']

for (var i = 0; i < arloji.length - 1; i++) {
    string1 += arloji[i] + ", ";
}

string1 += "dan " + arloji[arloji.length - 1];

console.log(string1 + ".");


//soal nomor 2

var koleksi = [];

var koleksia = [];

var kamus = "abcdefghijklmnopqrstuvwxyz";

let fruits = ["cherry","blueberry","avocado","apple","cranberry"];

// console.log(fruits[0][0]);

for (var i = 0; i < kamus.length; i++) {
    for (var j = 0; j < fruits.length; j++) {
        if (kamus[i] == fruits[j][0]) {
            koleksia.push(fruits[j]);
            
        }
    }
    if (koleksia.length == 0) {
        continue;
    }
    else {
        koleksi.push(koleksia); 
    }
    
    koleksia = []; 
}
console.log(koleksi);

//soal nomor 3

let kalimat = "belajar bersama dunia coding yuk";

var hasil = []
var sentence = ""
var count = 0;

for (var i = 0; i <= kalimat.length; i++) {
    if (kalimat[i] !== " ") {
        sentence += kalimat[i];
    }
    else {
        hasil.push(sentence);
        sentence = "";
    }
    if(i === kalimat.length - 1){
        hasil.push(sentence);
        sentence = "";
    }
}


console.log(hasil);
