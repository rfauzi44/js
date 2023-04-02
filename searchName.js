const theirName = [
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

function searchName(data, queryname, limit, callbackFn) {
  let result = callbackFn(data, queryname);
  console.log(result.slice(0, limit));
}

//searchName(name, "AN", 3, filterItems)
searchName(theirName, "ll", 10, filterItems);
