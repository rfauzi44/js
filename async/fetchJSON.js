async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    response = await response.json();
    let names = response.map(({ name }) => name);
    console.log(names);
  } catch (error) {
    console.log("error");
  }
}
getData();
