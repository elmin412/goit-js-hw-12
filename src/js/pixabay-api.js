import axios from 'axios';

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

export async function getImages(query, currentPage, perPage) {
  const KEY = "42578241-c2049137a4025890cf19aabd8";
  const BASE_URL = "https://pixabay.com/api/";
  const IMAGE_TYPE = "photo";
  const ORIENTATION = "horizontal";
  const SAFESEARCH = "true";
  const LINK = `${BASE_URL}?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${currentPage}&per_page=${perPage}`;

  try {
    const response = await axios.get(LINK);
    const images = response.data;
    if (!response.data || !response.data.hits || response.data.hits.length === 0) {
      throw new Error("No images found");
    }
    
    return images;

  } catch (error) {
    hideLoader();
    throw error;
  }
}
