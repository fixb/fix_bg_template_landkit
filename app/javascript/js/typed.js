//
// typed.js
// Theme module
//

import Typed from 'typed.js';

const myTyped = () => {


// const toggles = document.querySelectorAll('[data-typed]');
const toggles = document.querySelectorAll("#typed-about");

toggles.forEach(toggle => {
  const elementOptions = toggle.dataset.typed ? JSON.parse(toggle.dataset.typed) : {};

  const defaultOptions = {
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  };

  const options = {
    ...defaultOptions,
    ...elementOptions
  };

  new Typed(toggle, options);
});
};

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Convertible bond", "Capital increase", "Loans", "High yield debt"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  });
}

export { loadDynamicBannerText };
export { myTyped };
