// Mencari bagaimana cara print horizontal, karena default nya print vertical
// Caranya kita harus membuat variabel dengan string kosong
// Diprint sesuai baris yang kita inginkan
// Setelah itu print secara decrement
// Setelah itu buat new line setiap inner loop balik ke outer loop


let ruang = ""
let baris = 9


if (typeof(baris) == "number" /*(&& typeof(baris) !== null*/) {

  for(let j=baris; j>=1; j--)/*kita decrement karena kita mengharapkan j menjadi baris yg terus turun*/{
    baris = j
    for(let i=1 /*1 karena kita dari 1*/; i<=baris; i++){
      ruang = ruang + i
      // loop 1 : ruang = kosong maka ruang (kosong + 1) = 1
      // loop 2 : ruang = 1 maka ruang (1 + 2) = 12 
      // loop 3 : ruang = 12 maka ruang (12 + 3) = 123 
    }
    //sebenernya jadinya itu 12345.1234.123.12.1 maka kita newline

    ruang = ruang + "\n"
  }
  console.log(ruang)

  }
  else {
    console.log(`Data Anda ${typeof(baris)} Mohon masukkan angka`)
  }


  // Cara memahami nested loop 

  // for(let i=1; i<=5; i++){
  //   ruang = ruang + i
  // }
  // outputnya 12345


  // for(let i=1; i<=4; i++){
  //   ruang = ruang + i
  // }
  // outputnya 1234


//urutan matters



