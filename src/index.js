import './sass/main.scss';

const debounce = require('lodash.debounce');
import fetchCountries from '../js/fetchCountries.js';
import countryTpl from '../templates/country.hbs';
import countriesListTpl from '../templates/countries-list.hbs';
import { renderer } from '../js/renderer.js';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core/dist/PNotify.js';
import { defaults } from '@pnotify/core';
defaults.closerHover = false;

const refs = {
  resultContainer: document.querySelector('.results'),
  input: document.querySelector('.input-js'),
};

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput() {
  let searchQuery = refs.input.value;
  refs.resultContainer.innerHTML = '';
  if (refs.input.value !== '') {
    fetchCountries(searchQuery).then(data => {
      if (data.length === 1) {
        renderer(data, countryTpl);
      } else if (data.length >= 2 && data.length <= 10) {
        renderer(data, countriesListTpl);
      } else if (data.length > 10) {
        showErrorMsg('Too many matches found! Please enter a more specific query');
      } else if (data.status === 404) {
        showErrorMsg('Sorry. No matches found.');
      }
    });
  }
}

function showErrorMsg(text) {
  error({
    title: `${text}`,
    delay: 3000,
  });
}
