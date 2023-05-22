const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// cekHariKerja("selasa")
//   .then((hariIni) => {
//     console.log(`Hari ${hariIni} ini adalah hari kerja`);
//   })
//   .catch((Error) => {
//     console.log(Error.message);
//   });

// then untuk melakukan sesuatu apabila promisenya resolve, catch untuk error.

async function init (hari) {
    try {
        const hariIni = await cekHariKerja(hari)
        console.log(`Hari ${hariIni} ini adalah hari kerja`)
    } catch (Error) {
        console.log(Error.message)

    }
  
}

init("rabu")

// async harus dibungkus dengan function
