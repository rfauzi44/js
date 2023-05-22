/*
1. Cara membuat if statement di javascript, pada dasarny sintaksnya begini:

if (kondisi true) {
    eksekusi perintah ini;
}

Ada variasinya else, else if, switch  
*/

//2.
let harga;
harga = 3679;
console.log("Harga " + harga )
if (harga >= 10000) {
  console.log("Mahal")
} else if (harga > 5000) {
  console.log("Sedang")
} else if (harga > 0) {
  console.log("Murah")
} else {
  console.log("Masukkan harga")
}

let nilai = 90;
if (nilai < 50) {
  console.log("jelek")
} else if (nilai < 70) {
  console.log("sedang")
} else {
  console.log("bagus")
}
