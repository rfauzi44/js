function ongkir(jarak) {
    let biaya = 0
    if (jarak <= 2) {
      biaya = 5000;
    } else {
      biaya = 5000 + 3000*(jarak - 2);
    }
    return biaya;
  }
  
  let jarak = 6.7
  console.log("Biaya ongkir jarak " + jarak + "m adalah Rp" + ongkir(jarak))