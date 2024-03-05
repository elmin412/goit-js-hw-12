export function renderImages(images) {
    const container = document.querySelector(".gallery");
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image"
                src="${webformatURL}"
                data-source="${largeImageURL}"
                alt="${tags}"/></a>
                <p><span class="image-items-text">Likes: </span>${likes}</p>
                <p><span class="image-items-text">Views: </span>${views}</p>
                <p><span class="image-items-text">Comments: </span>${comments}</p>
                <p><span class="image-items-text">Downloads: </span>${downloads}</p>
            </li>`;
    }).join('')
      container.insertAdjacentHTML("beforeend", markup);
}

