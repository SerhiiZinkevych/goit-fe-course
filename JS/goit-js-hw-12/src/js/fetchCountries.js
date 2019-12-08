import listTemplate from '../templates/listTemplate.hbs';
import singleItemTemplate from '../templates/singleItemTemplate.hbs';
import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/PnotifyBrightTheme.css';

const debounce = require('lodash.debounce');
const baseUrl = 'https://restcountries.eu/rest/v2/name/';

const refs = {
  inputField: document.querySelector('#inputField'),
  content: document.querySelector('#content'),
};

refs.inputField.addEventListener('input', debounce(getData, 500));

function getData() {
  const inputValue = inputField.value;
  if (!inputValue) {
    refs.content.innerHTML = '';
    return;
  }

  fetch(baseUrl + inputValue)
    .then(response => {
      if (response.status === 404) {
        throw 'No matches found!';
      }
      return response.json();
    })
    .then(data => {
      renderPage(data);
    })
    .catch(e => {
      PNotify.error({
        text: e,
      });
    });
}

function renderPage(data) {
  let markup;
  PNotify.closeAll();
  if (data.length === 1) {
    markup = singleItemTemplate(data[0]);
  } else if (data.length > 10) {
    throw 'Too many matches found. Please enter a more specific querry!';
  } else {
    markup = listTemplate(data);
  }
  refs.content.innerHTML = '';
  if (markup) {
    refs.content.insertAdjacentHTML('beforeend', markup);
  }
}
