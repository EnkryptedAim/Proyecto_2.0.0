import './home.css'
import { Footer } from '../../Components/footer/footer'
import { Header } from '../../Components/header/header'
import { AlbumList } from '../../Components/AlbumsList/AlbumsList'
import { Data } from '../../utils/albumsData'

const homeAlbums = [
  'Finisterra',
  'Gaia',
  'Ilussia',
  'Alicia en el Metaverso',
  'Hechizos, Pócimas y Brujería',
  'Gaia II: La voz dormida',
  'Ira Dei',
  'Gaia III: Atlantia',
  'Bandera Negra',
  'Jesus de Chamberí',
  'La Leyenda de la Mancha',
  'La ciudad de los Árboles',
  'Love and Oz',
  'Diabulus in Opera',
  'Love and Oz II'
]

export const Home = () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  const main = document.createElement('main')
  app.innerHTML = Header()
  main.classList.add('ss-noise')
  main.innerHTML = `
    <article class="h-main" style="position: relative;">
      <a id="shopLink" class="discover-btn" href="#shop" style=""><p>Shop now</p></a>
      <img class="h-hero" src="https://res.cloudinary.com/duzguojrd/image/upload/PROYECTO2%20BUENO/dx6kcoaxo7dvkrgfktim.jpg" alt="Hero">
    </article>
    <article>
      <div class="home-top"><h2>New Arrivals</h2><span>[${homeAlbums.length}]</span></div>
    </article>
  `

  main.innerHTML += AlbumList(Data, homeAlbums)
  app.appendChild(main)

  const albumList = document.querySelector('.album-list')
  albumList.style.padding = '0 1rem 2rem 1rem'

  const outerAlbumList = document.querySelector('#album-list')
  outerAlbumList.style.padding = '0'

  app.innerHTML += Footer()
}
