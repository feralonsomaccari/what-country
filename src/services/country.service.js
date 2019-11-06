function GetCountriesService(name, resolve, reject) {
  let url = "https://restcountries.eu/rest/v2/all";
  if (name) {
    url = "https://restcountries.eu/rest/v2/name/" + name;
  }
  fetch(url)
    .then(res => res.json())
    .then(data => {
      resolve(data);
      // return data;
    })
    .catch(console.log);
}

export default GetCountriesService;