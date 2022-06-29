import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const itemsMarkUp = galleryItems.map((item) => {
    gallery.insertAdjacentHTML('beforeEnd',
    `<a class="gallery__item" href=${item.original}>
        <img class="gallery__image"
        src="${item.preview}" 
        data-source="${item.original}"
        alt="${item.description}"
        title="${item.description}"/>
    </a>`
    )
}
).join(" ");

const intanceElement = new SimpleLightbox('.gallery a', { 
    captionPosition: "bottom",
    captionDelay: 250,
});