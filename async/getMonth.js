const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data not found"), []);
    }
  }, 4000);
};

const showMonth = (notif, data) => {
  if (data.length > 0) {
    for (let index = 0; index < data.length; index++) {
      console.log(data[index]);
    }
  } else {
    console.log(notif.message);
  }
};

getMonth(showMonth);
