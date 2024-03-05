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

function markupImages(event) {
    event.preventDefault();
    const query = searchInput.value.trim();  
    clearGallery();
    showLoader();
    form.reset();
    getImages(query)
    .then((images) => {
        renderImages(images);
        lightbox.refresh()
    })      
    .catch((error) => {
            hideLoader(); 
          console.error(error.message);
      iziToast.error({
        title: "Error",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
        });   
}
fetchButton.addEventListener("click", markupImages);