import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

export const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('input[name="search-text"]'),
    gallery: document.querySelector('.js-gallery'),
  };

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = refs.input.value;
    console.log(query);

    getImagesByQuery(query)
    // console.log(getImagesByQuery(query));
    .then(res => {
        console.log(res);
        createGallery(res, refs.gallery);
        console.log(refs.gallery);
    })
  })

//   console.log(createGallery('sun'));