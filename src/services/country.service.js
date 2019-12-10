function GetCountriesService(name, resolve, reject) {
  let url = "https://restcountries.eu/rest/v2/all";
  // if (name) url = "https://restcountries.eu/rest/v2/name/" + name; // This is if I want to fetch an especific country in te future
  fetch(url)
    .then(res => res.json())
    .then(data => {
      resolve(data);
    })
    .catch(data => {
      reject(data);
    });
}

export default GetCountriesService;
