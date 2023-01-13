const nama = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

function searchName(data, queryNama, limit, callbackFn) {
  let hasil = callbackFn(data, queryNama);
  console.log(hasil.slice(0, limit));
}



//searchName(nama, "AN", 3, filterItems)
searchName(nama, "L", 10, filterItems);
