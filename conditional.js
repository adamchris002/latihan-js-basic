//SOAL NOMOR 1

power = 75

if (power < 30) {
    console.log("Character is Beginner")
}
else if (power >= 30 && power < 50) {
    console.log("Character is Basic")
}
else if (power >= 50 && power < 70) {
    console.log("Character is Normal")
}
else if (power >=70 && power < 100) {
    console.log("Character is Pro")
}
else {
    console.log("Character is Expert")
}

//SOAL NOMOR 2

var minuman = "Sweet Tea"

switch (minuman) {
        case "":
            console.log("Input minuman")
            break;
        case "Sweet Tea":
            console.log("You choose Sweet Tea, thanks")
            break;
        case "Plain Tea": 
            console.log("You choose Plain Tea, thanks")
            break;
        case "Boba":
            console.log("You choose Boba, thanks")
            break;
        case "Milk Coffee":
            console.log("You choose Milk Coffee, thanks")
            break;
        case "Choco Ice":
            console.log("You choose Choco Ice thanks")
            break;
        default:
            console.log("minuman is not defined")
    }
    
    // SOAL NOMOR 3

    var coupon = "FreeOngkir"
    var pembelian = 35000
    
    if (coupon === "FreeOngkir") {
        if (pembelian >= 50000) {
            var potongan = pembelian * 0.1
            console.log("Total pembelian Anda Rp. " + (pembelian - potongan))
        }
        else if (pembelian <= 50000 && pembelian >= 30000) {
            var potongan = pembelian * 0.05
            console.log("Total pembelian Anda Rp. " + (pembelian - potongan))
        }
        else {
            var potongan = pembelian * 0.025
            console.log("Total pembelian Anda Rp. " + (pembelian - potongan))
        }
    }
    else if (coupon === "Free15%") {
        if (pembelian >= 30000) {
            var potongan = pembelian * 0.15
            console.log("Total pembelian Anda Rp. " + (pembelian - potongan))
        }
        else {
            console.log("Total pembelian Anda Rp. " + pembelian)
        }
    }
    else {
        console.log("Coupon yang Anda pilih tidak ada")
    }