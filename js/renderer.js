export function renderer(data, template) {
  const resultContainer = document.querySelector('.results');

  function renderMarkup(data) {
    return data.map(template).join(' ');
  }

  resultContainer.insertAdjacentHTML('beforeend', renderMarkup(data));
}
