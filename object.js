let bioData = {
  name: "Rizal",
  age: 31,
  hobbies: ["nonton film", "maen basket","maen bola","maen game"],
  isMarried: true,
  schoolList: [
    {
      name: "Universitas Indonesia",
      yearIn: 2012,
      yearOut: 2015,
      major: "Finance",
    },
    {
      name: "Universitas Gadjah Mada",
      yearIn: 2009,
      yearOut: 2012,
      major: "Finance",
    },
    {
      name: "SMA N 11 Yogyakarta",
      yearIn: 2006,
      yearOut: 2009,
      major: null,
    },
  ],
  skillList:[{
    name : "Accounting",
    level: "Intermediate",
  },{
    name: "WordPress",
    level: "Intermediate",
  },{
    name: "Server",
    level: "Intermediate"
  }],
  interestInCoding: "true"
}

console.log(bioData.skillList[1].name);
console.log(bioData.schoolList[2].major);
