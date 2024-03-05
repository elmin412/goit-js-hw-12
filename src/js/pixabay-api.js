export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

export function getImages(query) {
  const KEY = "42578241-c2049137a4025890cf19aabd8";
  const BASE_URL = "https://pixabay.com/api/";
  const IMAGE_TYPE = "photo";
  const ORIENTATION = "horizontal";
  const SAFESEARCH = "true";
  const LINK = `${BASE_URL}?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;

  return fetch(LINK)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Image error");
      }
      return response.json();
    })
      .then((data) => {
          hideLoader();
      if (data.hits.length === 0) {
        throw new Error("No images found");
      }
          return data.hits;
      });
  
    
}
