// import d'un autre composant
import main from './main.styl';
import Flickity from 'flickity';

const App = {
  init: () => {
    // const iframes = document.querySelectorAll('iframe')

    // for (var i = 0; i < iframes.length; i++) {
    //   iframes[i].src = iframes[i].dataset.src
    // }
    App.current = 0
    App.books = document.querySelectorAll('.book')

    // var flkty = new Flickity( books, {
    //   'cellSelector': '.book',
    // });

    document.getElementById('prev').addEventListener('click', App.prev)
    document.getElementById('next').addEventListener('click', App.next)
    document.getElementById('corner').addEventListener('click', App.intro)
  },
  intro: () => {
    document.body.classList.toggle('intro')
  },
  next: () => {
    App.books[App.current].style.visibility = 'hidden'
    App.current = (App.current + 1)%(App.books.length - 1)
    console.log(App.current)
    App.books[App.current].style.visibility = 'visible'
  },
  prev: () => {
    App.books[App.current].style.visibility = 'hidden'
    App.current = App.current - 1
    if (App.current < 0) App.current = App.books.length - 1
    console.log(App.current)
    App.books[App.current].style.visibility = 'visible'
  }
}

document.addEventListener('DOMContentLoaded', App.init)
