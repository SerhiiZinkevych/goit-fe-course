import menu from './menu.json';
import './css/styles.css';
import menuItemTemplate from './templates/menu-item.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  themeCheckBox: document.querySelector('#theme-switch-control'),
  body: document.querySelector('body'),
};

const markup = menuItemTemplate(menu);
refs.menuList.insertAdjacentHTML('beforeend', markup);

const userTheme = localStorage.getItem('userTheme');

if (userTheme) {
  if (userTheme === Theme.DARK) {
    refs.themeCheckBox.checked = true;
  } else {
    refs.themeCheckBox.checked = false;
  }
  refs.body.classList.add(userTheme);
}

refs.themeCheckBox.addEventListener('change', e => {
  if (e.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('userTheme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('userTheme', Theme.LIGHT);
  }
});
