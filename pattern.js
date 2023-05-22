function printSegitiga (baris) {

    let ruang = "";
  
    for(let i = 1, k = baris ; i <= baris; i++, k--) {
  
      for(j = baris; j >= i; j--) {
        ruang = ruang + k
      }
      ruang = ruang + "\n"
    }
  
    return ruang;
  }
  let baris = 9
  console.log(baris + " baris segitiga" + '\n\n' + printSegitiga(baris));