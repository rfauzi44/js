let minData = 5;
//console.log(seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]))
//console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
//console.log(seleksiNilai(4, 17 , [2, 25, 4]))
//console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAkhir <= nilaiAwal) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (dataArray.length <= minData) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  } else {
    let hasil = dataArray.filter(
      (element) => element > nilaiAwal && element < nilaiAkhir
    );
    if (hasil.length === 0) {
      return "Nilai tidak ditemukan";
    } else {
      hasil = hasil.sort(function (a, b) {
        return a - b;
      });
      return hasil;
    }
  }
}
