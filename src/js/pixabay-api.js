import axios from 'axios';


// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";


// const server = axios.create({
//     baseURL: 'https://pixabay.com/api/',
//     headers: {
//         key: '53354647-5c23245d0a5319fc788c83675',
//         q: '',
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//     },
// });

 export function getImagesByQuery(query) {
   return axios.get('https://pixabay.com/api/', {
    params: {
        key: '53354647-5c23245d0a5319fc788c83675',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
    }
   })
   .then(res =>  res.data.hits)
    .catch(err => console.log(err));
};

// console.log(getImagesByQuery('sky'));



//   function imageTemplate(image) {
//     return ` <img src="${image.previewURL}" alt="${image.tags}">`
//   };

//   function imagesTemplate(images) {
//     return images.map(imageTemplate).join('');
//   };





// key: 53354647-5c23245d0a5319fc788c83675
// q:
// image_type: photo
// orientation: horizontal
// safesearch: true




// Кожне зображення описується об'єктом, з якого тебе цікавлять лише такі властивості:

// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень