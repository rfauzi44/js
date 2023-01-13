const axiosRequest = require("axios");

// let response = axiosRequest.get("http://www.boredapi.com/api/activity/");
// console.log(response.data.activity);

// axiosRequest
//   .get("http://www.boredapi.com/api/activity/")
//   .then((response) => {
//     console.log(response.data.activity);
//   })
//   .catch(() => {
//     console.log("error");
//   });

async function getActivity() {
  try {
    let response = await axiosRequest.get(
      "http://www.boredapi.com/api/activity/"
    );
    console.log(response.data.activity);
  } catch {
    console.log("Error");
  }
}

getActivity();
