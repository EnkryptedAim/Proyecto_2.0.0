import './albumCard.css'

export const AlbumCard = (album) => {
  return `
    <article id="${album.id}" class="album-card">
      <img class="sub" src=${album.cover} alt='${album.name}' />
      <img draggable="false"class="super" src="https://res.cloudinary.com/duzguojrd/image/upload/v1709636371/PROYECTO2%20BUENO/jht14ijlkhnyk2zpambq.webp" alt="cover">
      <h3 style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${album.name}</h3>
      <h5 style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${album.artist}</h5>
      <p>${album.price}€</p>
      <div class="buy-btn--container">
        <button id="add-to-cart" data-album-id="${album.id}">
          <span class="desktop-addCart">Add to Cart</span>
          <span class="mobile-addCart"><i class="fa-solid fa-cart-plus"></i></span>
        </button>
      </div>
    </article>
  `
}
