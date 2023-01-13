const dataAnak = [
  { nama: "rizal", umur: 30 },
  { nama: "aldi", umur: 25 },
  { nama: "fauzi", umur: 27 },
  { nama: "fazz", umur: 19 },
  { nama: "track", umur: 17 },
];

const getData = (umur) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      hasil = dataAnak.filter((dataAnak) => dataAnak.umur > umur);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Datanya lama");
      }
    }, 3000);
  });
};

const tambahUmur = () => {
  for (let i = 0; i < hasil.length; i++) {
    hasil[i].umur = hasil[i].umur + 1;
  }
  console.log(hasil);
};

// getData(23)
//   .then(tambahUmur)
//   .catch((message) => {
//     console.log(message);
//   });

async function dataTambah(batas) {
  try {
    let hasil = await getData(batas);
    tambahUmur();
  } catch (message) {
    console.log(message);
  }
}
dataTambah(26);
