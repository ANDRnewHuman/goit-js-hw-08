// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
console.log(SimpleLightbox);
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const refs = {
  galleryTagUl: document.querySelector('.gallery'),
};
const cardsMarkup = createImgCardsMarkup(galleryItems);
refs.galleryTagUl.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgCardsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" 
  href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a>
</li>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  animationSpeed: 250,
});
