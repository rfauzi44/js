// Algoritma
// Mencari bagaimana cara print horizontal, karena default nya print vertical
// Yaitu kita harus membuat variabel dengan string kosong
// Print sesuai row yang kita inginkan
// Setelah itu print secara decrement
// Setelah itu buat new line setiap inner loop balik ke outer loop
let space = ""
let row = 10

if (typeof(row) == "number" /*(&& typeof(row) !== null*/) {

  for(let j=row; j>=1; j--)/*kita decrement karena kita mengharapkan j menjadi row yg terus turun*/{
    row = j
    for(let i=1 /*1 karena kita dari 1*/; i<=row; i++){
      space = space + i
      // loop 1 : space = kosong maka space (kosong + 1) = 1
      // loop 2 : space = 1 maka space (1 + 2) = 12 
      // loop 3 : space = 12 maka space (12 + 3) = 123 
    }
    //sebenernya jadinya itu 12345.1234.123.12.1, maka kita newline

    space = space + "\n"
  }
  console.log(space)

  }
  else {
    console.log(`Data Anda ${typeof(row)} Mohon masukkan angka`)
  }


  // Cara memahami nested loop 

  // for(let i=1; i<=5; i++){
  //   space = space + i
  // }
  // outputnya 12345


  // for(let i=1; i<=4; i++){
  //   space = space + i
  // }
  // outputnya 1234


//urutan matters



