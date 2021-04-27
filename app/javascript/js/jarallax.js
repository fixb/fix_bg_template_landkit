//
// jarallax.js
// Theme module
//

import { jarallax, jarallaxVideo, jarallaxElement } from 'jarallax';
import 'jarallax/dist/jarallax.css';

const toggles = document.querySelectorAll('[data-jarallax], [data-jarallax-element]');

// Add Video extension
jarallaxVideo();

// Add Element extension
jarallaxElement();

// Init Jarallax
jarallax(toggles);
