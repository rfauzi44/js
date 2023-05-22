const children = [
  { nama: "rizal", umur: 30 },
  { nama: "aldi", umur: 25 },
  { nama: "fauzi", umur: 27 },
  { nama: "fazz", umur: 19 },
  { nama: "track", umur: 17 },
];

const getData = (umur) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      hasil = children.filter((children) => children.umur > umur);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Datanya lama");
      }
    }, 3000);
  });
};

const addAge = () => {
  for (let i = 0; i < hasil.length; i++) {
    hasil[i].umur = hasil[i].umur + 1;
  }
  console.log(hasil);
};

// getData(23)
//   .then(addAge)
//   .catch((message) => {
//     console.log(message);
//   });

async function dataTambah(batas) {
  try {
    await getData(batas);
    addAge();
  } catch (message) {
    console.log(message);
  }
}
dataTambah(26);
