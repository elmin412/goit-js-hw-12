// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('form');
const fetchButton = document.querySelector(".search-btn");
const container = document.querySelector(".gallery");
const searchInput = document.querySelector('input[type="text"]');
const loader = document.querySelector('.loader')
const loadMore = document.querySelector(".load-more-btn");

const lightbox = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
})

function showLoader() {
    loader.style.display = 'block';
}
function hideLoader() {
    loader.style.display = 'none';
}
function clearGallery() {
    container.innerHTML = '';
}

async function markupImages(event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    clearGallery();
    showLoader();
    form.reset();
   try {
     const images = await getImages(query);
      renderImages(images);
      hideLoader()
      lightbox.refresh();
     if (images.length > 1) {
       loadMore.style.display = 'flex';
     }
  } 
    catch(error) {
      hideLoader();
        loadMore.style.display = 'none'; 
        iziToast.error({
          title: "Error",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
      });
    };
}
fetchButton.addEventListener("click", markupImages)

let page = 1;
let perPage = 15;
const  limit = 20;
const totalHits = Math.ceil(100 / limit);

loadMore.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  try {
    const images = await getImages(query, page, limit, perPage );
        renderImages(images);
        lightbox.refresh();
         page + 1;
       const cardHeight = container.getBoundingClientRect().height;
            window.scrollBy({
            top: 2 * cardHeight,
            behavior: 'smooth'
  });
    if (images.length > totalHits) {
      loadMore.style.display = 'none';
      iziToast.info({
          title: "End of search results",
          message: "We're sorry, but you've reached the end of search results.",
          position: "topRight",
      });
    }
    } catch (error) {
        console.error(error.message);
  }
})

