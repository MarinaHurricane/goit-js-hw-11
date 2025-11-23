  import SimpleLightbox from "simplelightbox";
  import "simplelightbox/dist/simple-lightbox.min.css";
  // import { refs } from '/src/main.js'
 


  // const refs = {
  //   form: document.querySelector('.form'),
  //   input: document.querySelector('input[name="search-text"]'),
  //   gallery: document.querySelector('.js-gallery'),
  // };

  export function createGallery(images, container) {
    container.innerHTML = images.map(image => (
      `<li class="gallery-item">
      <div class="gallery-container">
      <div class="gallery">
        <a href="${image.webformatURL}"><img src="${image.largeImageURL}" alt="${image.tags}" title=""/></a>
    </div>

    <div class="description">
          <div class="sub-descr">
          <span class="img-descr-title">Likes</span>
          <span class="img-descr">${image.likes}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Views</span>
          <span class="img-descr">${image.views}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Comments</span>
          <span class="img-descr">${image.comments}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Downloads</span>
          <span class="img-descr">${image.downloads}</span>
        </div>
    </div>
    </div>

    </li>`

    )).join('');

  

    const lightbox = new SimpleLightbox(".js-gallery a", {
      captions: true,
      captionsData: "alt",
      captionDelay: 250,
      captionPosition: "bottom"})
  };



//  const list = document.querySelector('.js-gallery');
//   console.log(createGallery('sun'));

  // function clearGallery()

  // function showLoader()

  // function hideLoader()


//   const lightbox = new SimpleLightbox(".gallery a", {
//     captions: true,
//     captionsData: "alt",
//     captionDelay: 250,
//     captionPosition: "bottom"
//   });

//   iziToast.show({
//     message: `❌ Rejected promise in ${delay}ms`,
//     color: 'red',
//     position: 'topRight',
//     messageSize: '20',
//   });
