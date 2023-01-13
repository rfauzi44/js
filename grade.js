let nilaiSaya = [
  {
    subject: "math",
    nilai: 50,
  },
  {
    subject: "ipa",
    nilai: 79,
  },
  {
    subject: "bahasaInggris",
    nilai: 66,
  },
  {
    subject: "bahasaIndonesia",
    nilai: 85,
  },
]

//solusi supaya jangan harcode pembagian 5

let jumlah = null
for (let i = 0; i < nilaiSaya.length; i++) {
    jumlah = jumlah + nilaiSaya[i].nilai
}
let rataRata = jumlah / nilaiSaya.length

nilaiSaya.push({subject: "olahraga", nilai: 100})

hasil = rataRata >= 90 ? hasil = "A" : rataRata >= 80 ? hasil = "B" : rataRata >= 70 ? hasil = "C" : rataRata >= 60 ? hasil = "D" : hasil = "E"

for (i=0; i < nilaiSaya.length; i++){
  console.log(`${nilaiSaya[i].subject} : ${nilaiSaya[i].nilai}`)
  }

console.log(`Grade : ${hasil}`)
    


//Sebenarnya lebih enak pakai ini sih

// if (rataRata >= 90 && <= 100) {
//     console.log("Grade = A")
// }
// else if (rataRata >= 80) {
//     console.log("Grade = B")
// }
// else if (rataRata >= 70) {
//     console.log("Grade = C");
// }
// else if (rataRata >= 60) {
//     console.log("Grade = D");
// }
// else {
//     console.log("Grade = E");
// }



//Apabila jumlah tidak dideklarasikan maka nggak bisa
//Hasil kenapa nggak pake let