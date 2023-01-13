let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
}

let dataRizal = {
  name: "Rizal",
  email: "rizal@rizal.com",
  hobbies: ["nonton film", "maen futsal", "maen game"],
}

let bioDataJoin = {...data, ...dataRizal}
console.log(bioDataJoin);

let {street, city} = bioDataJoin.address
console.log(`Alamat ${bioDataJoin.name} adalah di Jalan ${street} , Kota ${city}`);





  