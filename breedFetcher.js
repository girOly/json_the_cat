const request = require("request");
const breedSearch = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`;

request(url, (error, response, body) => {
  if (error === true) {
    return console.log("Failed to request details: ", error);
  }
  const dataParse = JSON.parse(body);
  const breed = dataParse[0];
  if (breed === true) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedSearch}`);
  }
});
