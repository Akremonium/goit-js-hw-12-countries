export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(r => {
      if (r.ok) return r.json();
      throw new Error('Error fetching data');
    })
    .catch(error => {
      console.error('Error', error);
    });
}
