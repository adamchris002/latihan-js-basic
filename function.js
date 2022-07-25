// soal 1

// function printNumbers(num) {
//     var temp = [];
//     var newnum = 1;
//     while (temp.length != num) {
//         var baru = countPrime(newnum);
//         if (baru === 2) {
//             temp.push(newnum);
//         }
//         newnum++;
//     }

//     console.log(temp);
// }

// printNumbers(10);

// function countPrime(num) {
//     var temp = [];
//     for (var i = 1; i <= num; i++) {
//         if(num % i == 0) {
//             temp.push(i);
//         }
//     }
//     return temp.length;
// }


// printPrimes(10);

//soal nomor 2

// function triple(a, b, c) {
//     a = a * a;
//     b = b * b;
//     c = c * c;

//     var hasil;

//     if ((a + b) == c) {
//         hasil = true;
//         console.log(hasil);
//     }
//     else {
//         hasil = false;
//         console.log(hasil)
//     }
// }

// triple(3,4,5);
// triple(3,3,3);
// triple(6,8,10);

//soal nomor 3

// let input = "5279312";

// function splitToArray (string) {
//     var list = [];
//     var sentence = "";
//     for (var i = 0; i < string.length; i++) {
//         sentence += string[i];
//         list.push(sentence);
//         sentence = "";
//     }
//     return list;
// }

// function findTheLargest (string) {
//     var newlist = splitToArray(string);

//     var newarr = [];

//     for (var i = 0; i < newlist.length - 1; i++) {
//         newarr.push(Number(newlist[i] + newlist[i + 1]));
//     }

//     var temp = 0;
    
//     for (var i = 0; i < newarr.length; i++) {
//         if (newarr[i] < newarr[i + 1]) {
//             temp = 0;
//             temp += newarr[i + 1];
//         }
//         else {
//             continue;
//         }
        
//     }

//     return temp;
// }

// console.log(findTheLargest(input));
