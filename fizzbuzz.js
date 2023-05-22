/*
Soal 1

Loop adalah cara untuk mengeksekusi kode secara berulang-ulang. Misalnya kita mau ngeprint angka dari 1-10, tentu kita bisa melakukannya dengan cara console.log("1"), console.log("2") dan seterusnya. Namun tentunya itu tidak efektif bukan. 
Ada 3 cara loop atau iterasi:
1. For
for (awalnya, kondisi yang harus true supaya jalan, next yang dilakukan apabila true) {
  kode yang ingin dijalankan
}

2. While
while (kondisi yang harus true supaya jalan) {
  kode yang dijalankan
}

3. Do While
do {
 kode yang dijalankan
} while (kondisi yang harus true supaya jalan)

*/

// Soal 2
for (let i = 20; i >= 15; i--) {
    console.log(i)
  }
  
  
  /*
  j = 20
  while(j >= 15) {
    console.log(j);
    j--;
  }
  */
  
  console.log("\n")
  
  // Soal 3
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz")
    } else if (i % 5 == 0) {
      console.log("buzz")
    } else if (i % 3 == 0) {
      console.log("fizz")
    } else {
      console.log(i)
    }
  }
  
  