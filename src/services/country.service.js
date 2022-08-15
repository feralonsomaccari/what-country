const GetCountriesService = async () => {
  // if (name) url = "https://restcountries.eu/rest/v2/name/" + name; // This is if I want to fetch an especific country in te future
  let url = "https://restcountries.com/v3.1/all";
  return await fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
}

export default GetCountriesService;
