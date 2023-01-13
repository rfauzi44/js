let angka = [1, 2, 3, 4, 5];

console.log(angka.pop());
//mengeluarkan array terakhir
console.log(angka);

console.log(angka.toString());
//mengubah menjadi string

console.log(angka.reverse());
//membalik angka menjadi terakhir

angkaPush = angka.push(6);
//menambah data array menjadi terakhir, returnnya length array
console.log(angkaPush);
console.log(angka);

let angkaLanjut = [6, 7, 8, 9, 10];
//menggabungkan array menjadi 1
let angkaConcat = angka.concat(angkaLanjut);
console.log(angkaConcat);

let kalimat = "Hello World Rizal";
//memtong string berdasarkan sesuatu, menjadikannya array
console.log(kalimat.split(" "));

console.log(kalimat.substring(0, 4));
//memotong string dari array ke-n hingga array ke-i

console.log(kalimat.slice(4, 1));
//memotong string dengan argument array ke-n dan mau berapa array

console.log(kalimat.toLowerCase());
//mengubah menjadi lower case semua

console.log(kalimat.includes("Fauzi"));
//apakah dia include string yang dimaksud, return boolean
