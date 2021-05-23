export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(r => {
      return r.json();
    })
    .catch(error => {
      console.log('Error', error);
    });
}
