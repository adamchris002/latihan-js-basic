// SOAL NOMOR 1

var number = 10
var string = "";

for (var i = 0; i <= number; i++) {
    if (number % i == 0) {
        string += i + ", ";
    }
}

console.log(string);

//SOAL NOMOR 2

var n = 5;
var string = ""
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        if (j % 2 == 0) {
            string += "X"
        }
        else {
            string += "#"
        }
    }
    string += "\n"
}

console.log(string)

//SOAL NOMOR 3

var nomor = 5
var string = ""

for (var i = 0; i < nomor; i++) {
    for (var j = 0; j < nomor; j++) {
        if (j == 0 || j == nomor - 1 || i == 0 || i == nomor -1) {
            string += "*"
        }
        else {
            string += " "
        }
    }
    string += "\n"
}

console.log(string)
