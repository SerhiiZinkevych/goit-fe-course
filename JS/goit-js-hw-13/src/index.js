import 'material-design-icons/iconfont/material-icons.css';
import './styles.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'pnotify/dist/PnotifyBrightTheme.css';

import Masonry from 'masonry-layout';
import ImagesLoaded from 'imagesloaded';
import InfiniteScroll from 'infinite-scroll';
import * as basicLightbox from 'basiclightbox';
import PNotify from 'pnotify/dist/es/PNotify';

import galleryItemTemplate from './templates/galleryItemTemplate.hbs';

// к-во картинок за одну загрузку
const picsPerPage = 12;
// Ключ pixabay API
const API_Key = '14481243-ffa5b678be0edea71dcb3ff43';

const baseUrl = 'https://pixabay.com/api/?key=' + API_Key;

const refs = {
  gallery: document.querySelector('#gallery'),
  formBtn: document.querySelector('.search-btn'),
  formField: document.querySelector('.search-field'),
  end: document.querySelector('.infinite-scroll-last'),
};

const masonryInstance = new Masonry(refs.gallery, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  gutter: 10,
  transitionDuration: '0.3s',
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

// Указываем InfiniteScroll ссылку на imagesLoaded
InfiniteScroll.imagesLoaded = ImagesLoaded;

const infScrollInstance = new InfiniteScroll('.grid', {
  responseType: 'text',
  history: false,
  outlayer: masonryInstance, //указываем InfiniteScroll ссылку на Masonry
  status: '.page-load-status', // анимация загрузки
  path: function() {
    return (
      baseUrl +
      `&q=${refs.formField.value}&per_page=${picsPerPage}&page=${this.pageIndex}`
    );
  },
});

// proxy элемент для создания объектов HTML из разметки
const proxyElem = document.createElement('div');

function handleResponse(hits) {
  const markup = hits.map(galleryItemTemplate).join();
  proxyElem.innerHTML = markup;
  const items = proxyElem.querySelectorAll('.grid-item');
  ImagesLoaded(items, function() {
    infScrollInstance.appendItems(items);
    masonryInstance.appended(items);
    // Если загруженного контента не хватает для появления скролла - делаем еще один запрос пока не заполним экран.
    // Иначе не сработает Infinite scroll для подальшей загрузки изображений.
    if (document.body.clientHeight < window.innerHeight) {
      infScrollInstance.loadNextPage();
    }
  });
}

function infLoadHandler(response) {
  //достаем обьекты из ответа
  const { hits } = JSON.parse(response);
  if (hits.length > 0) {
    handleResponse(hits);
  } else {
    //если пришло 0 записей и это первая загрузка показываем сообщение о том что картинок нет
    if (infScrollInstance.loadCount === 1) {
      PNotify.error({
        text: 'No images found! 😢',
      });
    } else {
      //если это не первая загрузка отвязываем событие по загрузке данных и отображаем параграф "End of content"
      //так как pixabay возвращает пустой массив даже есликартинок не найдено...
      //или если, например, на странице pageIndex - №100 картинок не найдено...
      //можно запрашивать страницу 101,102,103 и pixabay всегда будет возвращать пустой массив
      //и infinite Scroll не перестает отправять запросы.
      //По этому чуть погуглив нашел вариант отвязывать событие если картинки закончились и привязывать при первом запросе.
      infScrollInstance.off('load', infLoadHandler);
      refs.end.style.display = 'block';
    }
  }
}

refs.formBtn.addEventListener('click', e => {
  e.preventDefault();
  //Сброс параметров при первом запросе.
  refs.end.style.display = 'none';
  infScrollInstance.pageIndex = 1;
  infScrollInstance.loadCount = 0;
  //привязка infScrollInstance
  infScrollInstance.on('load', infLoadHandler);
  //Чистим Masonry
  masonryInstance.remove(masonryInstance.getItemElements());
  //Чистим DOM
  refs.gallery.innerHTML = '';
  //Добавляем grid-sizer в сетку
  const gridSizer = document.createElement('li');
  gridSizer.classList.add('grid-sizer');
  refs.gallery.appendChild(gridSizer);
  //загружаем порцию элементов и размещаем их
  infScrollInstance.loadNextPage();
  masonryInstance.layout();
});

refs.gallery.addEventListener('click', e => {
  // если кликнули по картинке basicLightBox покажет большую картинку которая хранится в аттрибуте "data-source"
  if (e.target.tagName === 'IMG') {
    basicLightbox.create(`<img src="${e.target.dataset.source}">`).show();
  }
});
