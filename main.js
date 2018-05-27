// import d'un module CSS
import classes from './main.scss';
import Flickity from 'flickity';

export default () => {
  console.log(classes.main);
};

const App = {
  init: () => {
    const iframes = document.querySelectorAll('iframe')

    for (var i = 0; i < iframes.length; i++) {
      iframes[i].src = iframes[i].dataset.src
    }
  }
}

document.addEventListener('DOMContentLoaded', App.init)
