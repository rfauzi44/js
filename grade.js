let myGrade = [
  {
    subject: "math",
    score: 50,
  },
  {
    subject: "ipa",
    score: 79,
  },
  {
    subject: "bahasaInggris",
    score: 66,
  },
  {
    subject: "bahasaIndonesia",
    score: 85,
  },
]

let total = 0
for (let i = 0; i < myGrade.length; i++) {
    total = total + myGrade[i].score
}
let average = total / myGrade.length

myGrade.push({subject: "olahraga", score: 100})

grade = average >= 90 ? grade = "A" : average >= 80 ? grade = "B" : average >= 70 ? grade = "C" : average >= 60 ? grade = "D" : grade = "E"

for (i=0; i < myGrade.length; i++){
  console.log(`${myGrade[i].subject} : ${myGrade[i].score}`)
  }

console.log(`Grade : ${grade}`)