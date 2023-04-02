let firstData = {
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

let secondData = {
  name: "Rizal",
  email: "rizal@rizal.com",
  hobbies: ["nonton film", "maen futsal", "maen game"],
}

//when join, last object will override previous object
let bioDataJoin = {...firstData, ...secondData}
console.log(bioDataJoin);

let {street, city} = bioDataJoin.address
console.log(`Address of ${bioDataJoin.name} is in ${street} , City of ${city}`);





  